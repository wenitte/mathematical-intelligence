# 

Source: https://proofwiki.org/wiki/Cosine_of_Integer_Multiple_of_Argument/Formulation_7



Theorem
For $n \in \Z_{>0}$:














\(\ds \cos n \theta\)

\(=\)







\(\ds \sin^2 \frac {\paren {n + 1} \pi} 2 + \paren {\sin^2 \frac {n \pi} 2} \cos \theta - \paren {2 \sin \theta} \paren {\map \sin {\paren {n - 1} \theta} + \map \sin {\paren {n - 3} \theta} + \map \sin {\paren {n - 5} \theta} + \cdots}\)




















\(\ds \)

\(=\)







\(\ds \sin^2 \frac {\paren {n + 1} \pi} 2 + \paren {\sin^2 \frac {n \pi} 2} \cos \theta - 2 \sin \theta \paren {\sum_{k \mathop = 0}^{n - 1} \paren {\sin^2 \frac {k \pi} 2} \map \sin {\paren {n - k} \theta} }\)











Proof
The proof proceeds by induction.

For all $n \in \Z_{>0}$, let $\map P n$ be the proposition:

$\ds \cos n \theta = \sin^2 \frac {\paren {n + 1} \pi} 2 + \paren {\sin^2 \frac {n \pi} 2} \cos \theta - 2 \sin \theta \paren {\sum_{k \mathop = 0}^{n - 1} \paren {\sin^2 \frac {k \pi} 2} \map \sin {\paren {n - k} \theta} }$


Basis for the Induction
$\map P 1$ is the case:














\(\ds \cos \theta\)

\(=\)







\(\ds \cos \theta\)




















\(\ds \)

\(=\)







\(\ds \sin^2 \frac {\paren {1 + 1} \pi} 2 + \paren {\sin^2 \frac \pi 2} \cos \theta - 2 \sin \theta \paren {\paren {\sin \frac {0 \pi} 2} \map \sin {\paren {1 - 0} \theta} }\)









So $\map P 1$ is seen to hold.

$\map P 2$ is the case:














\(\ds \cos 2 \theta\)

\(=\)







\(\ds 1 - 2 \sin^2 \theta\)





Double Angle Formula for Cosine: Corollary $2$














\(\ds \)

\(=\)







\(\ds \sin^2 \frac {\paren {2 + 1} \pi} 2 + \paren {\sin^2 \frac {2 \pi} 2} \cos \theta - 2 \sin \theta \paren {\paren {\sin \frac {0 \pi} 2} \map \sin {\paren {2 - 0} \theta} + \paren {\sin \frac \pi 2} \map \sin {\paren {2 - 1} \theta} }\)









So $\map P 2$ is also seen to hold.

$\map P 3$ is the case:














\(\ds \cos 3 \theta\)

\(=\)







\(\ds -2 \sin \theta \sin 2 \theta + \cos \theta\)





Cosine of Integer Multiple of Argument: Formulation 6














\(\ds \)

\(=\)







\(\ds \sin^2 \frac {\paren {3 + 1} \pi} 2 + \paren {\sin^2 \frac {3 \pi} 2} \cos \theta - 2 \sin \theta \paren {\paren {\sin \frac {0 \pi} 2} \map \sin {\paren {3 - 0} \theta} + \paren {\sin \frac \pi 2} \map \sin {\paren {3 - 1} \theta} + \paren {\sin \frac {2 \pi} 2} \map \sin {\paren {3 - 2} \theta} }\)









So $\map P 3$ is also seen to hold.

This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P n$ is true, where $n > 3$ and $n$ even, then it logically follows that $\map P {n + 2}$ is true.
We also need to show that, if $\map P n$ is true, where $n > 3$ and $n$ odd, then it logically follows that $\map P {n + 2}$ is true.

So this is our induction hypothesis:

$\ds \map \cos {n \theta} = \sin^2 \frac {\paren {n + 1} \pi} 2 + \paren {\sin^2 \frac {n \pi} 2} \cos \theta - 2 \sin \theta \paren {\sum_{k \mathop = 0}^{n - 1} \paren {\sin^2 \frac {k \pi} 2} \map \sin {\paren {n - k} \theta} }$
from which we are to show:

$\ds \map \cos {\paren {n + 2} \theta} = \sin^2 \frac {\paren {n + 3} \pi} 2 + \paren {\sin^2 \frac {\paren {n + 2} \pi} 2} \paren {\cos \theta} - 2 \sin \theta \paren {\sum_{k \mathop = 0}^{n + 1} \paren {\sin^2 \frac {k \pi} 2} \map \sin {\paren {n + 2 - k} \theta} }$


Induction Step
This is our induction step:
For $n$ even or for $n$ odd: (Identical argument)














\(\ds \map \cos {\paren {n + 2} \theta}\)

\(=\)







\(\ds \paren {-2 \sin \theta} \map \sin {\paren {n + 1} \theta} + \map \cos {\paren n \theta}\)





Cosine of Integer Multiple of Argument: Formulation 6














\(\ds \)

\(=\)







\(\ds \paren {-2 \sin \theta} \map \sin {\paren {n + 1} \theta} + \sin^2 \frac {\paren {n + 1} \pi} 2 + \paren {\sin^2 \frac {n \pi} 2} \cos \theta - 2 \sin \theta \paren {\sum_{k \mathop = 0}^{n - 1} \paren {\sin^2 \frac {k \pi} 2} \map \sin {\paren {n - k} \theta} }\)




















\(\ds \)

\(=\)







\(\ds \sin^2 \frac {\paren {n + 1} \pi} 2 + \paren {\sin^2 \frac {n \pi} 2} \cos \theta - \paren {2 \sin \theta} \paren {\paren {\sin \frac {0 \pi} 2} \map \sin {\paren {n + 2 - 0} \theta} + \paren {\sin \frac {\pi} 2} \map \sin {\paren {n + 2 - 1} \theta} } - 2 \sin \theta \paren {\sum_{k \mathop = 0}^{n - 1} \paren {\sin^2 \frac {k \pi} 2} \map \sin {\paren {n - k} \theta} }\)





rearranging terms and adding zero














\(\ds \)

\(=\)







\(\ds \sin^2 \frac {\paren {n + 3} \pi} 2 + \paren {\sin^2 \frac {\paren {n + 2} \pi} 2} \paren {\cos \theta} - \paren {2 \sin \theta} \paren {\paren {\sin \frac {0 \pi} 2} \map \sin {\paren {n + 2 - 0} \theta} + \paren {\sin \frac \pi 2} \map \sin {\paren {n + 2 - 1} \theta} } - 2 \sin \theta \paren {\sum_{k \mathop = 0}^{n - 1} \paren {\sin^2 \frac {k \pi} 2} \map \sin {\paren {n - k} \theta} }\)





Sine of Angle plus Integer Multiple of Pi














\(\ds \)

\(=\)







\(\ds \sin^2 \frac {\paren {n + 3} \pi} 2 + \paren {\sin^2 \frac {\paren {n + 2} \pi} 2} \paren {\cos \theta} - \paren {2 \sin \theta} \paren {\paren {\sin \frac {0 \pi} 2} \map \sin {\paren {n + 2 - 0} \theta} + \paren {\sin \frac \pi 2} \map \sin {\paren {n + 2 - 1} \theta} } - 2 \sin \theta \paren {\sum_{k \mathop = 2}^{n + 1} \paren {\sin^2 \frac {k \pi} 2} \map \sin {\paren {n + 2 - k} \theta} }\)





Translation of Index Variable of Summation














\(\ds \)

\(=\)







\(\ds \sin^2 \frac {\paren {n + 3} \pi} 2 + \paren {\sin^2 \frac {\paren {n + 2} \pi} 2} \paren {\cos \theta} - 2 \sin \theta \paren {\sum_{k \mathop = 0}^{n + 1} \paren {\sin^2 \frac {k \pi} 2} \map \sin {\paren {n + 2 - k} \theta} }\)










The result follows by the Principle of Mathematical Induction.
Therefore:

$\ds \forall n \in \Z_{>0}: \cos n \theta = \sin^2 \frac {\paren {n + 1} \pi} 2 + \paren {\sin^2 \frac {n \pi} 2} \cos \theta - 2 \sin \theta \paren {\sum_{k \mathop = 0}^{n - 1} \paren {\sin^2 \frac {k \pi} 2} \map \sin {\paren {n - k} \theta} }$
$\blacksquare$


Examples
Cosine of Quintuple Angle
$\cos 5 \theta = \cos \theta - 2 \sin \theta \paren {\sin 4 \theta + \sin 2 \theta}$


Cosine of Sextuple Angle
$\map \cos {6 \theta } = 1 - 2 \sin \theta \paren {\sin 5 \theta + \sin 3 \theta + \sin \theta}$




