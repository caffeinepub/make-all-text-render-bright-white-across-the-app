import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import CopyBlock from '../components/CopyBlock';
import AnimatedSection from '../components/AnimatedSection';

export default function ResourcesPage() {
  return (
    <div className="container py-16">
      <AnimatedSection>
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">Resources & Templates</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Essential guides and templates for your college application journey
          </p>
        </div>
      </AnimatedSection>

      <Tabs defaultValue="essays" className="max-w-5xl mx-auto">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="essays">Essays</TabsTrigger>
          <TabsTrigger value="resume">Resume</TabsTrigger>
          <TabsTrigger value="bragsheet">Brag Sheet</TabsTrigger>
          <TabsTrigger value="emails">Cold Emails</TabsTrigger>
        </TabsList>

        <TabsContent value="essays" className="mt-6 space-y-6">
          <AnimatedSection>
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Essay Writing Guide</CardTitle>
                <CardDescription>
                  Master the art of writing compelling college application essays
                </CardDescription>
              </CardHeader>
              <CardContent className="prose prose-invert max-w-none space-y-6">
                <div>
                  <p className="text-muted-foreground">
                    Essays submitted to colleges are a strategic chance for a student to show who they
                    are beyond grades and test scores.
                  </p>
                  <p className="text-muted-foreground mt-4">An essay will help admissions officers understand:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
                    <li>Your personality, values, and mindset</li>
                    <li>What drives you</li>
                    <li>What you might contribute to the campus and university community</li>
                  </ul>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="what">
                    <AccordionTrigger className="text-lg font-semibold">
                      What Is a College Application Essay?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-3">
                      <p>A college application essay is a personal narrative, not an academic paper.</p>
                      <p>It is your opportunity to:</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Tell your story</li>
                        <li>Demonstrate growth and self-awareness</li>
                        <li>Highlight experiences/interactions/events/opportunities that matter to you</li>
                        <li>Add depth to your application</li>
                        <li>Express who you truly are</li>
                      </ul>
                      <p className="mt-3">
                        Admissions officers read thousands of essays, thus it is important to showcase
                        clarity, authenticity, and reflection.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="approach">
                    <AccordionTrigger className="text-lg font-semibold">
                      How to Approach Essay Writing (Step-by-Step)
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Step 1: Brainstorm Meaningful Experiences</h4>
                        <p>Think about moments that:</p>
                        <ul className="list-disc list-inside space-y-1 mt-2">
                          <li>Changed your perspective</li>
                          <li>Challenged you</li>
                          <li>Sparked curiosity or passion</li>
                          <li>Show resilience, initiative, or growth</li>
                        </ul>
                        <p className="mt-2">Big achievements are not required — small moments with true meaning work best</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Step 2: Write a Compelling Opening</h4>
                        <p>Your first few lines should:</p>
                        <ul className="list-disc list-inside space-y-1 mt-2">
                          <li>Draw in the reader</li>
                          <li>Set the tone</li>
                          <li>Avoid clichés and generic statements</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Step 3: While writing "Show, Don't Tell"</h4>
                        <p>
                          Instead of stating traits like "hardworking" or "passionate," demonstrate the
                          qualities through your actions and decisions
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Step 4: End With Purpose</h4>
                        <p>Your conclusion should:</p>
                        <ul className="list-disc list-inside space-y-1 mt-2">
                          <li>Tie back to your growth</li>
                          <li>Show forward-thinking (how this shapes your future)</li>
                          <li>Leave the reader with clarity about who you are</li>
                        </ul>
                        <p className="mt-2">Avoid dramatic or overly philosophical endings. Keep it genuine and grounded.</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="mistakes">
                    <AccordionTrigger className="text-lg font-semibold">
                      Common Mistakes to Avoid
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      <ul className="list-disc list-inside space-y-2">
                        <li>Writing what you think sounds impressive</li>
                        <li>Listing achievements already on your application</li>
                        <li>Overusing quotes or metaphors</li>
                        <li>Being overly formal or robotic</li>
                        <li>Ignoring the word limit</li>
                      </ul>
                      <p className="mt-4 font-medium text-foreground">
                        The best essays are not perfect — they are personal, thoughtful, and real
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </AnimatedSection>
        </TabsContent>

        <TabsContent value="resume" className="mt-6 space-y-6">
          <AnimatedSection>
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Student Resume Template</CardTitle>
                <CardDescription>
                  A professional resume template designed for high school students
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose prose-invert max-w-none">
                  <h3 className="text-lg font-semibold">What a Resume Can Be Used For</h3>
                  <p className="text-muted-foreground">
                    For students, a resume is a short document that highlights their skills, achievements,
                    activities, and experiences. Its purpose is to introduce who they are to colleges,
                    scholarship committees, or employers, and to show their potential, interests, and
                    readiness to learn - even if they have limited work experience.
                  </p>
                </div>

                <CopyBlock
                  title="Resume Template"
                  content={`FULL NAME
City, State | Phone Number | Email Address

OBJECTIVE
Motivated high school student seeking a __________________________ position where I can develop skills in __________________________ and contribute to __________________________.

EDUCATION
School Name – City, State
Grade: ____ | Expected Graduation: ____

RELEVANT COURSEWORK (optional)
• __________________________
• __________________________

EXPERIENCE (Relevant Work / Volunteer / School-Based)
Position Title – Organization Name
Month/Year – Month/Year
• __________________________

ACTIVITIES / EXTRACURRICULARS
__________________________
__________________________

SKILLS:
__________________________

PROJECTS (optional):
Project Title
__________________________

CERTIFICATIONS / AWARDS (optional):
___________________________

REFERENCES:
____________________________`}
                />
              </CardContent>
            </Card>
          </AnimatedSection>
        </TabsContent>

        <TabsContent value="bragsheet" className="mt-6 space-y-6">
          <AnimatedSection>
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Brag Sheet Template</CardTitle>
                <CardDescription>
                  Help teachers write strong recommendation letters
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose prose-invert max-w-none">
                  <h3 className="text-lg font-semibold">What is a Brag Sheet?</h3>
                  <p className="text-muted-foreground">
                    A brag sheet is a document where you detail your achievements, activities, goals, and
                    personality to help teachers/counsellors write strong recommendation letters. To make
                    one, list accomplishments (awards, clubs, jobs, volunteering), describe significant
                    experiences (challenges overcome, leadership roles), state your goals, and add personal
                    details.
                  </p>
                </div>

                <CopyBlock
                  title="Brag Sheet Template"
                  content={`Letter of Recommendation BRAG SHEET

This form will be used by your teacher to write the letter of recommendations you need for your college and scholarships. This will also help you in completing college applications and writing your personal statement or scholarship essays. Be thorough. Please make a copy of this document and share it with your teacher.

Full Name:

Professional Email:

IBDP Predicted Grades:

Intended Major:

Desired College:

[TABLE: Extra-Curricular/Co-Curricular Activities]
Grade | Activity | Positions/Role | Responsibilities | Hrs/Wk | Wks/YR

[TABLE: Community Service]
Grade | Service | Positions/Role | Responsibilities | Hrs/Wk | Wks/YR

[TABLE: Honours / Awards]
Grade | Award

[TABLE: Educational / Summer Programs]
Grade | Program | Description & Benefits

QUESTIONS:

The highest degree you want?
☐ Bachelors (college)
☐ Masters (graduate school)
☐ Doctorate
☐ Other

Mom's education:
☐ Less than HS
☐ HS Graduate
☐ 2year College Grad (only if in U.S.)
☐ 4year College Grad (only if in U.S.)
☐ Other

Dad's education:
☐ Less than HS
☐ HS Graduate
☐ 2year College Grad (only if in U.S.)
☐ 4year College Grad (only if in U.S.)
☐ Other

Country where you were born:

Why would you like to attend college? Discuss your career and personal goals.

Are there any particular circumstances, school experiences, or persons that influenced your preparation or motivation to attend college (e.g., cultural/financial background, family, teachers, schools you attended)? Please explain.

Discuss your academic background. Did you utilize any additional support at your high school, such as tutoring?

Do your grades in high school reflect your academic ability or potential? Explain.

Describe any obstacles you have faced in school/academics and how you overcame them:

Describe your family's economic background. Include information about your financial challenges (if any):`}
                />
              </CardContent>
            </Card>
          </AnimatedSection>
        </TabsContent>

        <TabsContent value="emails" className="mt-6 space-y-6">
          <AnimatedSection>
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Cold Email Templates</CardTitle>
                <CardDescription>
                  Professional email templates for reaching out to mentors and professors
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose prose-invert max-w-none">
                  <h3 className="text-lg font-semibold">What are Cold Emails?</h3>
                  <p className="text-muted-foreground">
                    Cold emails for high school students are concise, personalised, and unsolicited messages
                    sent to professionals, researchers, or professors to request mentorship, research
                    opportunities, or informational interviews. These emails help students stand out by
                    showing initiative, bridging the gap between high school and professional/academic
                    fields, and building early networks.
                  </p>
                </div>

                <CopyBlock
                  title="Internship/Shadowing Request"
                  content={`Dear Mr./Ms. (name),

My name is (name), and I'm a student at (current education). I am writing to inquire about potential internship/shadowing opportunities available for (field) at (company name), where a student such as myself might be able to join for a duration of (duration).

I would make a good fit for your company because (briefly outline experiences/qualifications).

I have attached my resume and would love to hear back from you.

Best,
(name)`}
                />

                <CopyBlock
                  title="LinkedIn Outreach"
                  content={`Hi Sir/ma'am,

I'm interested in the work that (company) does and was wondering if you could spare a few minutes to chat about your experiences working there. If you're swamped with work or feel someone else is better suited, I would greatly appreciate it if you could point me in the right direction.`}
                />

                <CopyBlock
                  title="Professor/Researcher Outreach"
                  content={`Subject: High School Student Interested in Learning About [Field]

Dear Professor [Last Name],

My name is [Your Name], and I am a high school student at [Your School]. I am very interested in learning more about [field/subject], and I came across your work while researching professionals in this area.

I was wondering if you would be open to a brief conversation or an opportunity to observe or learn more about your work through mentoring, shadowing, or a short internship. I am eager to learn and would greatly appreciate any guidance or insight you might be willing to share.

I understand you have a busy schedule, so even a short response or suggestion would mean a lot to me. Thank you very much for your time and consideration.

Sincerely,
[Your Name]
[Grade, School]
[Optional: LinkedIn / portfolio / resume]`}
                />
              </CardContent>
            </Card>
          </AnimatedSection>
        </TabsContent>
      </Tabs>
    </div>
  );
}
