import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

export default function SchoolTimelinePage() {
  return (
    <div className="container py-16">
      <AnimatedSection>
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">School Timeline</h1>
          <p className="text-xl text-foreground max-w-2xl mx-auto">
            Important dates and country-specific exam guidance
          </p>
        </div>
      </AnimatedSection>

      <div className="max-w-4xl mx-auto space-y-8">
        <AnimatedSection>
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Exam Timeline & Information</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="ap">
                  <AccordionTrigger className="text-lg font-semibold">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-chart-1/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">📝</span>
                      </div>
                      Greenwood High AP Exam Center
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground space-y-3 pl-13">
                    <ul className="space-y-2">
                      <li>
                        <span className="font-semibold text-foreground">Registrations beginning:</span> September
                      </li>
                      <li>
                        <span className="font-semibold text-foreground">Late Registrations:</span> January - March
                      </li>
                      <li>
                        <span className="font-semibold text-foreground">Exam testing date:</span> May
                      </li>
                      <li>
                        <span className="font-semibold text-foreground">Note:</span> No late testing in Greenwood Center
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="psat-sat">
                  <AccordionTrigger className="text-lg font-semibold">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-chart-2/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">📚</span>
                      </div>
                      PSAT/SAT Information
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground space-y-3 pl-13">
                    <ul className="space-y-2">
                      <li>
                        <span className="font-semibold text-foreground">GWH PSAT Exam:</span> October (hosted at Greenwood High)
                      </li>
                      <li>
                        <span className="font-semibold text-foreground">SAT/PSAT exams:</span> Available at external centers
                      </li>
                      <li className="pt-2">
                        <span className="font-semibold text-foreground">Registration:</span>
                        <a
                          href="https://satsuite.collegeboard.org/sat/registration?excmpid=st_sat_ie258&gad_source=1"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground hover:underline inline-flex items-center gap-1 ml-2"
                        >
                          College Board Registration
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </AnimatedSection>

        <AnimatedSection>
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Country-Specific Exam Guidance</CardTitle>
              <p className="text-sm text-foreground mt-2">
                General preferences and prerequisites for different countries. This is a guide, not a strict plan.
              </p>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="usa">
                  <AccordionTrigger className="text-lg font-semibold">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-chart-3/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">🇺🇸</span>
                      </div>
                      United States (USA)
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground space-y-4 pl-13">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Main Exams</h4>
                      <ul className="space-y-2 list-disc list-inside">
                        <li>
                          <span className="font-medium">SAT / ACT:</span> Tests college readiness (math, reading, writing, science for ACT). Many universities are test-optional, but strongly recommend achieving high scores.
                        </li>
                        <li>
                          <span className="font-medium">AP (Advanced Placement) Exams:</span> Subject-based exams (AP Math, Physics, Biology, etc.). Used for college credit and advanced placement.
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">US Colleges Preferences</h4>
                      <p className="mb-2">Holistic admissions (they look at you as a whole):</p>
                      <ul className="space-y-1 list-disc list-inside">
                        <li>Extracurricular activities (sports, clubs, leadership, volunteering)</li>
                        <li>Essays / Personal statements</li>
                        <li>Letters of recommendation</li>
                        <li>AP courses are highly valued</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="uk">
                  <AccordionTrigger className="text-lg font-semibold">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-chart-4/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">🇬🇧</span>
                      </div>
                      United Kingdom (UK)
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground space-y-4 pl-13">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Main Exams</h4>
                      <ul className="space-y-2 list-disc list-inside">
                        <li>IBDP exams</li>
                        <li>
                          Subject-specific admissions tests (for top universities):
                          <ul className="ml-6 mt-1 space-y-1 list-circle">
                            <li>UCAT / BMAT – Medicine</li>
                            <li>LNAT – Law</li>
                            <li>MAT, STEP – Mathematics (Oxford, Cambridge)</li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">UK Universities Preferences</h4>
                      <ul className="space-y-1 list-disc list-inside">
                        <li>Strong subject knowledge</li>
                        <li>Grades in subjects directly related to your course</li>
                        <li>Personal Statement focused on academic interest</li>
                        <li>Little importance given to extracurriculars (unless relevant)</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="canada">
                  <AccordionTrigger className="text-lg font-semibold">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-chart-5/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">🇨🇦</span>
                      </div>
                      Canada
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground space-y-4 pl-13">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Main Exams</h4>
                      <ul className="space-y-2 list-disc list-inside">
                        <li>No national entrance exam</li>
                        <li>
                          Uses Grade 12 board exam scores:
                          <ul className="ml-6 mt-1 space-y-1">
                            <li>CBSE / ISC / IB / State Boards</li>
                          </ul>
                        </li>
                        <li>SAT/ACT – sometimes optional, mostly for international students</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Canadian Universities Preferences</h4>
                      <ul className="space-y-1 list-disc list-inside">
                        <li>Strong academic scores (especially Grade 11–12)</li>
                        <li>Subject prerequisites (Math, Physics, Chemistry for STEM)</li>
                        <li>Limited weight to extracurriculars</li>
                        <li>
                          Some programs require:
                          <ul className="ml-6 mt-1 space-y-1">
                            <li>Personal profile or short essays</li>
                            <li>Interviews (competitive programs)</li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="india">
                  <AccordionTrigger className="text-lg font-semibold">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-chart-1/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">🇮🇳</span>
                      </div>
                      India
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground space-y-4 pl-13">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Main Exams</h4>
                      <ul className="space-y-2 list-disc list-inside">
                        <li>JEE Main / JEE Advanced – Engineering (IITs, NITs)</li>
                        <li>NEET – Medicine</li>
                        <li>CUET – Central universities (DU, BHU, etc.)</li>
                        <li>CLAT – Law</li>
                        <li>IPMAT – Integrated management programs</li>
                        <li>State entrance exams (depends on each state)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Indian Colleges Preferences</h4>
                      <ul className="space-y-1 list-disc list-inside">
                        <li>Entrance exam rank (important)</li>
                        <li>Board exam eligibility (minimum % required)</li>
                        <li>Little focus on extracurriculars</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </div>
  );
}
