import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { quizQuestions, calculateResult, type QuizAnswer } from '../data/quiz';
import AnimatedSection from '../components/AnimatedSection';
import { ArrowRight, RotateCcw } from 'lucide-react';

export default function CareerQuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [showResults, setShowResults] = useState(false);

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  const handleNext = () => {
    if (!selectedAnswer) return;

    const newAnswers = [...answers, { questionId: currentQuestion, answer: selectedAnswer }];
    setAnswers(newAnswers);

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer('');
    } else {
      setShowResults(true);
    }
  };

  const handleRetake = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedAnswer('');
    setShowResults(false);
  };

  if (showResults) {
    const result = calculateResult(answers);
    return (
      <div className="container py-16">
        <AnimatedSection>
          <Card className="max-w-3xl mx-auto border-2">
            <CardHeader className="text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <span className="text-4xl">🎯</span>
              </div>
              <CardTitle className="text-4xl">Your Career Path</CardTitle>
              <CardDescription className="text-xl">{result.field}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-invert max-w-none">
                <p className="text-muted-foreground text-lg">{result.description}</p>
              </div>
              <div className="bg-accent/20 rounded-lg p-6 space-y-3">
                <h3 className="font-semibold text-lg">Why this field?</h3>
                <p className="text-muted-foreground">{result.explanation}</p>
              </div>
              <div className="flex justify-center pt-4">
                <Button onClick={handleRetake} size="lg" className="gap-2">
                  <RotateCcw className="w-4 h-4" />
                  Retake Quiz
                </Button>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    );
  }

  const question = quizQuestions[currentQuestion];

  return (
    <div className="container py-16">
      <div className="max-w-3xl mx-auto space-y-8">
        <AnimatedSection>
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Career Discovery Quiz</h1>
            <p className="text-muted-foreground text-lg">
              Answer these questions to find your ideal career path
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Question {currentQuestion + 1} of {quizQuestions.length}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">{question.question}</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
                <div className="space-y-3">
                  {question.options.map((option, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors cursor-pointer"
                      onClick={() => setSelectedAnswer(option.value)}
                    >
                      <RadioGroupItem value={option.value} id={`option-${index}`} />
                      <Label
                        htmlFor={`option-${index}`}
                        className="flex-1 cursor-pointer text-base"
                      >
                        {option.text}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </CardContent>
          </Card>
        </AnimatedSection>

        <div className="flex justify-end">
          <Button
            onClick={handleNext}
            disabled={!selectedAnswer}
            size="lg"
            className="gap-2"
          >
            {currentQuestion < quizQuestions.length - 1 ? 'Next Question' : 'See Results'}
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
