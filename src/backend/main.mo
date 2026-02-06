import Map "mo:core/Map";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";
import Order "mo:core/Order";
import Time "mo:core/Time";
import Text "mo:core/Text";

actor {
  // Mentor Model & Storage
  type Mentor = {
    id : Nat;
    name : Text;
    contactInfo : Text;
    qualifications : Text;
    created : Time.Time;
  };

  module Mentor {
    public func compare(mentor1 : Mentor, mentor2 : Mentor) : Order.Order {
      Text.compare(mentor1.name, mentor2.name);
    };
  };

  var nextMentorId = 0;
  let mentorStore = Map.empty<Nat, Mentor>();

  // Mentor API
  public shared ({ caller }) func createMentor(name : Text, contactInfo : Text, qualifications : Text) : async Nat {
    let id = nextMentorId;
    let mentor : Mentor = {
      id;
      name;
      contactInfo;
      qualifications;
      created = Time.now();
    };
    mentorStore.add(id, mentor);
    nextMentorId += 1;
    id;
  };

  public query ({ caller }) func listMentors(searchTerm : Text) : async [Mentor] {
    let allMentors = mentorStore.values().toArray();
    if (searchTerm == "") {
      return allMentors.sort();
    };

    let filtered = allMentors.filter(
      func(m) {
        m.name.toLower().contains(#text(searchTerm.toLower())) or
        m.qualifications.toLower().contains(#text(searchTerm.toLower()));
      }
    );
    filtered.sort();
  };

  public query ({ caller }) func getMentorById(id : Nat) : async Mentor {
    switch (mentorStore.get(id)) {
      case (null) { Runtime.trap("Mentor not found") };
      case (?mentor) { mentor };
    };
  };

  // Video Submission Model & Storage
  type VideoSubmission = {
    id : Nat;
    name : Text;
    qualifications : Text;
    videoUrl : Text;
    created : Time.Time;
  };

  module VideoSubmission {
    public func compare(v1 : VideoSubmission, v2 : VideoSubmission) : Order.Order {
      Text.compare(v1.name, v2.name);
    };
  };

  var nextVideoId = 0;
  let videoStore = Map.empty<Nat, VideoSubmission>();

  // Video API
  public shared ({ caller }) func submitVideo(
    name : Text,
    qualifications : Text,
    videoUrl : Text,
  ) : async Nat {
    let id = nextVideoId;
    let submission : VideoSubmission = {
      id;
      name;
      qualifications;
      videoUrl;
      created = Time.now();
    };
    videoStore.add(id, submission);
    nextVideoId += 1;
    id;
  };

  public query ({ caller }) func listVideos(searchTerm : Text) : async [VideoSubmission] {
    let allVideos = videoStore.values().toArray();
    if (searchTerm == "") {
      return allVideos.sort();
    };

    let filtered = allVideos.filter(
      func(v) {
        v.name.toLower().contains(#text(searchTerm.toLower())) or
        v.qualifications.toLower().contains(#text(searchTerm.toLower()));
      }
    );
    filtered.sort();
  };

  public query ({ caller }) func getVideoById(id : Nat) : async VideoSubmission {
    switch (videoStore.get(id)) {
      case (null) { Runtime.trap("Video not found") };
      case (?video) { video };
    };
  };
};
