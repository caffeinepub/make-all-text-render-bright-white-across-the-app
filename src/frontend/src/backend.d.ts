import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Mentor {
    id: bigint;
    created: Time;
    contactInfo: string;
    name: string;
    qualifications: string;
}
export type Time = bigint;
export interface VideoSubmission {
    id: bigint;
    created: Time;
    name: string;
    qualifications: string;
    videoUrl: string;
}
export interface backendInterface {
    createMentor(name: string, contactInfo: string, qualifications: string): Promise<bigint>;
    getMentorById(id: bigint): Promise<Mentor>;
    getVideoById(id: bigint): Promise<VideoSubmission>;
    listMentors(searchTerm: string): Promise<Array<Mentor>>;
    listVideos(searchTerm: string): Promise<Array<VideoSubmission>>;
    submitVideo(name: string, qualifications: string, videoUrl: string): Promise<bigint>;
}
