# 

Source: https://proofwiki.org/wiki/Cosine_of_Integer_Multiple_of_Argument/Formulation_5



Theorem
For $n \in \Z_{>0}$:














\(\ds \cos n \theta\)

\(=\)







\(\ds \map \sin {\frac {\paren {n + 1} \pi} 2} + \paren {\sin \frac {n \pi} 2} \cos \theta + \paren {2 \cos \theta} \paren {\map \cos {\paren {n - 1} \theta} - \map \cos {\paren {n - 3} \theta} + \map \cos {\paren {n - 5} \theta} - \cdots}\)




















\(\ds \)

\(=\)







\(\ds \map \sin {\frac {\paren {n + 1} \pi} 2} + \paren {\sin \frac {n \pi} 2} \cos \theta + 2 \cos \theta \paren {\sum_{k \mathop = 0}^{n - 1} \paren {\sin \frac {k \pi} 2} \map \cos {\paren {n - k} \theta} }\)











Proof
The proof proceeds by induction.

For all $n \in \Z_{>0}$, let $\map P n$ be the proposition:

$\ds \cos n \theta = \map \sin {\frac {\paren {n + 1} \pi} 2} + \paren {\sin \frac {n \pi} 2} \cos \theta + 2 \cos \theta \paren {\sum_{k \mathop = 0}^{n - 1} \paren {\sin \frac {k \pi} 2} \map \cos {\paren {n - k} \theta} }$


Basis for the Induction
$\map P 1$ is the case:














\(\ds \cos \theta\)

\(=\)







\(\ds \cos \theta\)




















\(\ds \)

\(=\)







\(\ds \map \sin {\frac {\paren {1 + 1} \pi} 2} + \paren {\sin \frac \pi 2} \paren {\cos \theta} + 2 \cos \theta \paren {\paren {\sin \frac {0 \pi} 2} \map \cos {\paren {1 - 0} \theta} }\)









So $\map P 1$ is seen to hold.

$\map P 2$ is the case:














\(\ds \cos 2 \theta\)

\(=\)







\(\ds 2 \cos^2 \theta - 1\)





Double Angle Formula for Cosine: Corollary $2$














\(\ds \)

\(=\)







\(\ds \map \sin {\frac {\paren {2 + 1} \pi} 2} + \paren {\sin \frac {2 \pi} 2} \paren {\cos \theta} + 2 \cos \theta \paren {\paren {\sin \frac {0 \pi} 2} \map \cos {\paren {2 - 0} \theta} + \paren {\sin \frac \pi 2} \map \cos {\paren {2 - 1} \theta} }\)









So $\map P 2$ is also seen to hold.

$\map P 3$ is the case:














\(\ds \cos 3 \theta\)

\(=\)







\(\ds 2 \cos \theta \cos 2 \theta - \cos \theta\)





Cosine of Integer Multiple of Argument: Formulation 4














\(\ds \)

\(=\)







\(\ds \map \sin {\frac {\paren {3 + 1} \pi} 2} + \paren {\sin \frac {3 \pi} 2} \paren {\cos \theta} + 2 \cos \theta \paren {\paren {\sin \frac {0 \pi} 2} \map \cos {\paren {3 - 0} \theta} + \paren {\sin \frac \pi 2} \map \cos {\paren {3 - 1} \theta} + \paren {\sin \frac {2 \pi} 2} \map \cos {\paren {3 - 2} \theta} }\)









So $\map P 3$ is also seen to hold.

This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P n$ is true, where $n > 3$ and $n$ even, then it logically follows that $\map P {n + 2}$ is true.
We also need to show that, if $\map P n$ is true, where $n > 3$ and $n$ odd, then it logically follows that $\map P {n + 2}$ is true.

So this is our induction hypothesis:

$\ds \map \cos {n \theta} = \map \sin {\frac {\paren {n + 1} \pi} 2} + \paren {\sin \frac {n \pi} 2} \paren {\cos \theta} + 2 \cos \theta \paren {\sum_{k \mathop = 0}^{n - 1} \paren {\sin \frac {k \pi} 2} \map \cos {\paren {n - k} \theta} }$
from which we are to show:

$\ds \map \cos {\paren {n + 2} \theta} = \map \sin {\frac {\paren {n + 3} \pi} 2} + \paren {\sin \frac {\paren {n + 2} \pi} 2} \paren {\cos \theta} + 2 \cos \theta \paren {\sum_{k \mathop = 0}^{n + 1} \paren {\sin \frac {k \pi} 2} \map \cos {\paren {n + 2 - k} \theta} }$


Induction Step
This is our induction step:
For $n$ even or for $n$ odd: (Identical argument)














\(\ds \map \cos {\paren {n + 2} \theta}\)

\(=\)







\(\ds \paren {2 \cos \theta} \map \cos {\paren {n + 1} \theta} - \map \cos {\paren n \theta}\)





Cosine of Integer Multiple of Argument: Formulation 4














\(\ds \)

\(=\)







\(\ds \paren {2 \cos \theta} \map \cos {\paren {n + 1} \theta} - \map \sin {\frac {\paren {n + 1} \pi} 2} - \paren {\sin \frac {n \pi} 2} \cos \theta - 2 \cos \theta \paren {\sum_{k \mathop = 0}^{n - 1} \paren {\sin \frac {k \pi} 2} \map \cos {\paren {n - k} \theta} }\)




















\(\ds \)

\(=\)







\(\ds -\map \sin {\frac {\paren {n + 1} \pi} 2} - \paren {\sin \frac {n \pi} 2} \cos \theta + \paren {2 \cos \theta} \paren {\paren {\sin \frac {0 \pi} 2} \map \cos {\paren {n + 2 - 0} \theta} + \paren {\sin \frac \pi 2} \map \cos {\paren {n + 2 - 1} \theta} } - 2 \cos \theta \paren {\sum_{k \mathop = 0}^{n - 1} \paren {\sin \frac {k \pi} 2} \map \cos {\paren {n - k} \theta} }\)





rearranging terms and adding zero














\(\ds \)

\(=\)







\(\ds \map \sin {\frac {\paren {n + 3} \pi} 2} + \paren {\map \sin {\frac {n \pi} 2 + \pi} } \paren {\cos \theta} + \paren {2 \cos \theta} \paren {\paren {\sin \frac {0 \pi} 2} \map \cos {\paren {n + 2 - 0} \theta} + \paren {\sin \frac \pi 2} \map \cos {\paren {n + 2 - 1} \theta} } - 2 \cos \theta \paren {\sum_{k \mathop = 0}^{n - 1} \paren {\sin \frac {k \pi} 2} \map \cos {\paren {n - k} \theta} }\)





Sine of Angle plus Integer Multiple of Pi














\(\ds \)

\(=\)







\(\ds \map \sin {\frac {\paren {n + 3} \pi} 2} + \paren {\sin \frac {\paren {n + 2} \pi} 2} \paren {\cos \theta} + \paren {2 \cos \theta} \paren {\paren {\sin \frac {0 \pi} 2} \map \cos {\paren {n + 2 - 0} \theta} + \paren {\sin \frac \pi 2} \map \cos {\paren {n + 2 - 1} \theta} } + 2 \cos \theta \paren {\sum_{k \mathop = 2}^{n + 1} \paren {\sin \frac {k \pi} 2} \map \cos {\paren {n + 2 - k} \theta} }\)





Translation of Index Variable of Summation














\(\ds \)

\(=\)







\(\ds \map \sin {\frac {\paren {n + 3} \pi} 2} + \paren {\sin \frac {\paren {n + 2} \pi} 2} \paren {\cos \theta} + 2 \cos \theta \paren {\sum_{k \mathop = 0}^{n + 1} \paren {\sin \frac {k \pi} 2} \map \cos {\paren {n + 2 - k} \theta} }\)










The result follows by the Principle of Mathematical Induction.
Therefore:

$\ds \forall n \in \Z_{>0}: \cos n \theta = \map \sin {\frac {\paren {n + 1} \pi} 2} + \paren {\sin \frac {n \pi} 2} \cos \theta + 2 \cos \theta \paren {\sum_{k \mathop = 0}^{n - 1} \paren {\sin \frac {k \pi} 2} \map \cos {\paren {n - k} \theta} }$
$\blacksquare$


Examples
Cosine of Quintuple Angle
$\cos 5 \theta = \cos \theta + 2 \cos \theta \paren {\cos 4 \theta - \cos 2 \theta}$


Cosine of Sextuple Angle
$\map \cos {6 \theta } = -1 + 2 \cos \theta \paren {\cos 5 \theta - \cos 3 \theta + \cos \theta }$




