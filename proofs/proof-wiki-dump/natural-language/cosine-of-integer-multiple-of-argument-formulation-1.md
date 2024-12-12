# 

Source: https://proofwiki.org/wiki/Cosine_of_Integer_Multiple_of_Argument/Formulation_1



Theorem
For $n \in \Z_{>0}$:














\(\ds \cos n \theta\)

\(=\)







\(\ds \dfrac 1 2 \paren {\paren {2 \cos \theta}^n - \dfrac n 1 \paren {2 \cos \theta}^{n - 2} + \dfrac n 2 \dbinom {n - 3} 1 \paren {2 \cos \theta}^{n - 4} - \dfrac n 3 \dbinom {n - 4} 2 \paren {2 \cos \theta}^{n - 6} + \cdots}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \paren {\paren {2 \cos \theta}^n + \sum_{k \mathop \ge 1} \paren {-1}^k \dfrac n k \dbinom {n - \paren {k + 1} } {k - 1} \paren {2 \cos \theta}^{n - 2 k} }\)











Proof
The proof proceeds by induction.

For all $n \in \Z_{>0}$, let $\map P n$ be the proposition:

$\ds \cos n \theta = \dfrac 1 2 \paren {\paren {2 \cos \theta}^n + \sum_{k \mathop \ge 1} \paren {-1}^k \dfrac n k \dbinom {n - \paren {k + 1} } {k - 1} \paren {2 \cos \theta}^{n - 2 k} }$


Basis for the Induction
$\map P 1$ is the case:














\(\ds \cos \theta\)

\(=\)







\(\ds \cos \theta\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {2 \cos \theta}^1\)









So $\map P 1$ is seen to hold.

$\map P 2$ is the case:














\(\ds \cos 2 \theta\)

\(=\)







\(\ds 2 \cos^2 \theta - 1\)





Double Angle Formula for Cosine: Corollary $1$














\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \paren {\paren {2 \cos \theta}^2 - \dfrac 2 1 \dbinom {2 - \paren {0 + 1} } {1 - 1} \paren {2 \cos \theta}^{2 - 2} }\)









So $\map P 2$ is also seen to hold.

This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P n$ is true, where $n > 2$, then it logically follows that $\map P {n + 1}$ is true.

So this is our induction hypothesis:

$\ds \map \cos {n \theta} = \dfrac 1 2 \paren {\paren {2 \cos \theta}^n + \sum_{k \mathop \ge 1} \paren {-1}^k \dfrac n k \dbinom {n - \paren {k + 1} } {k - 1} \paren {2 \cos \theta}^{n - 2 k} }$
from which we are to show:

$\ds \map \cos {\paren {n + 1} \theta} = \dfrac 1 2 \paren {\paren {2 \cos \theta}^{n + 1} + \sum_{k \mathop \ge 1} \paren {-1}^k \dfrac {n + 1} k \dbinom {n + 1 - \paren {k + 1} } {k - 1} \paren {2 \cos \theta}^{n + 1 - 2 k} }$


Induction Step
This is our induction step:
To proceed, we will require the following Lemma:

Lemma
For $n \in \Z$:













\(\ds \map \cos {n \theta} \map \sin {\theta}\)

\(=\)







\(\ds \map \sin {n \theta} \map \cos {\theta} - \map \sin {\paren {n - 1 } \theta}\)









$\Box$

Dividing through by $\sin \theta$, we obtain:














\(\ds \map \cos {n \theta}\)

\(=\)







\(\ds \frac {\map \sin {n \theta} \map \cos \theta - \map \sin {\paren {n - 1} \theta} } {\map \sin \theta}\)









We now have:














\(\ds \map \cos {\paren {n + 1} \theta}\)

\(=\)







\(\ds \map \cos {n \theta + \theta}\)




















\(\ds \)

\(=\)







\(\ds \cos n \theta \cos \theta - \sin n \theta \sin \theta\)





Cosine of Sum














\(\ds \)

\(=\)







\(\ds \paren {\frac {\map \sin {n \theta} \map \cos \theta - \map \sin {\paren {n - 1} \theta} } {\map \sin \theta} } \cos \theta - \sin n \theta \sin \theta\)





substitution from above














\(\ds \)

\(=\)







\(\ds \sin n \theta \frac {\paren {\cos^2 \theta - \sin^2 \theta} } {\sin \theta} - \map \sin {\paren {n - 1} \theta} \frac {\cos \theta} {\sin \theta}\)





group terms














\(\ds \)

\(=\)







\(\ds \frac {\map \sin {n \theta} } {\sin \theta} \paren {2 \cos^2 \theta - 1} - \frac {\map \sin {\paren {n - 1} \theta} } {\sin \theta} \cos \theta\)





Double Angle Formula for Cosine: Corollary $1$














\(\ds \)

\(=\)







\(\ds \paren {\sum_{k \mathop \ge 0} \paren {-1}^k \binom {n - \paren {k + 1} } k \paren {2 \cos \theta}^{n - \paren {2 k + 1} } } \paren {2 \cos^2 \theta - 1} - \paren {\sum_{k \mathop \ge 0} \paren {-1}^k \binom {n - 1 - \paren {k + 1} } k \paren {2 \cos \theta}^{n - 1 - \paren {2 k + 1} } } \cos \theta\)





Sine of Integer Multiple of Argument/Formulation 1














\(\ds \)

\(=\)







\(\ds \paren {\sum_{k \mathop \ge 0} \paren {-1}^k \binom {n - \paren {k + 1} } k \paren {2 \cos \theta}^{n - \paren {2 k + 1} } } \paren {\frac {\paren {2 \cos \theta}^2} 2 - 1} - \paren {\sum_{k \mathop \ge 0} \paren {-1}^k \binom {n - 1 - \paren {k + 1} } k \paren {2 \cos \theta}^{n - 1 - \paren {2 k + 1} } } \frac {\paren {2 \cos \theta} } 2\)





multiply by $1$














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\sum_{k \mathop \ge 0} \paren {-1}^k \binom {n - \paren {k + 1} } k \paren {2 \cos \theta}^{n + 1 - \paren {2 k} } } - \paren {\sum_{k \mathop \ge 0} \paren {-1}^k \binom {n - \paren {k + 1} } k \paren {2 \cos \theta}^{n - \paren {2 k + 1} } } - \frac 1 2 \paren {\sum_{k \mathop \ge 0} \paren {-1}^k \binom {n - \paren {k + 2} } k \paren {2 \cos \theta}^{n - \paren {2 k + 1} } }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\sum_{k \mathop \ge 0} \paren {-1}^k \binom {n - \paren {k + 1} } k \paren {2 \cos \theta}^{n + 1 - \paren {2 k} } } - \paren {\sum_{k \mathop \ge 0} \paren {-1}^k \paren {\binom {n - \paren {k + 1} } k + \frac 1 2 \binom {n - \paren {k + 2} } k } \paren {2 \cos \theta}^{n - \paren {2 k + 1} } }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\paren {2 \cos \theta}^{n + 1} + \sum_{k \mathop \ge 1} \paren {-1}^k \binom {n - \paren {k + 1} } k \paren {2 \cos \theta}^{n + 1 - \paren {2 k} } } + \paren {\sum_{k \mathop \ge 1} \paren {-1}^k \paren {\binom {n - \paren {\paren {k - 1} + 1} } {k - 1} + \frac 1 2 \binom {n - \paren {\paren {k - 1} + 2} } {k - 1} } \paren {2 \cos \theta}^{n - \paren {2 \paren {k - 1} + 1} } }\)





start all sums at $k = 1$














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\paren {2 \cos \theta}^{n + 1} + \sum_{k \mathop \ge 1} \paren {-1}^k \paren {\binom {n - \paren {k + 1} } k + 2 \binom {n - k} {k - 1} + \binom {n - \paren {k + 1} } {k - 1} } \paren {2 \cos \theta}^{n + 1 - \paren {2 k} } }\)





grouping all terms in one sum














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\paren {2 \cos \theta}^{n + 1} + \sum_{k \mathop \ge 1} \paren {-1}^k \paren {\binom {n - k} k + \binom {n - k} {k - 1} + \binom {n - k} {k - 1} } \paren {2 \cos \theta}^{n + 1 - \paren {2 k} } }\)





Pascal's Rule














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\paren {2 \cos \theta}^{n + 1} + \sum_{k \mathop \ge 1} \paren {-1}^k \paren {\binom {n + 1 - k} k + \binom {n - k} {k - 1} } \paren {2 \cos \theta}^{n + 1 - \paren {2 k} } }\)





Pascal's Rule














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\paren {2 \cos \theta}^{n + 1} + \sum_{k \mathop \ge 1} \paren {-1}^k \paren {\paren {\frac {n + 1 - k} k} \binom {n - k} {k - 1} + \binom {n - k} {k - 1} } \paren {2 \cos \theta}^{n + 1 - \paren {2 k} } }\)





Factors of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\paren {2 \cos \theta}^{n + 1} + \sum_{k \mathop \ge 1} \paren {-1}^k \paren {\paren {\frac {n + 1 - k} k + 1} \binom {n - k} {k - 1} } \paren {2 \cos \theta}^{n + 1 - \paren {2 k} } }\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \paren {\paren {2 \cos \theta}^{n + 1} + \sum_{k \mathop \ge 1} \paren {-1}^k \dfrac {n + 1} k \binom {n - k} {k - 1} \paren {2 \cos \theta}^{n + 1 - 2 k} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \paren {\paren {2 \cos \theta}^{n + 1} + \sum_{k \mathop \ge 1} \paren {-1}^k \dfrac {n + 1} k \binom {n + 1 - \paren {k + 1} } {k - 1} \paren {2 \cos \theta}^{n + 1 - 2 k} }\)





adding and subtracting $1$




The result follows by the Principle of Mathematical Induction.
Therefore:

$\ds \forall n \in \Z_{>0}: \cos n \theta = \dfrac 1 2 \paren {\paren {2 \cos \theta}^n + \sum_{k \mathop \ge 1} \paren {-1}^k \dfrac n k \dbinom {n - \paren {k + 1} } {k - 1} \paren {2 \cos \theta}^{n - 2 k} }$
$\blacksquare$


Examples
Cosine of Quintuple Angle
$\cos 5 \theta = \dfrac 1 2 \paren {\paren {2 \cos \theta }^5 - 5 \paren {2 \cos \theta }^3 + 5 \paren {2 \cos \theta } }$


Cosine of Sextuple Angle
$\cos 6 \theta = \dfrac 1 2 \paren {\paren {2 \cos \theta }^6 - 6 \paren {2 \cos \theta }^4 + 9 \paren {2 \cos \theta }^2 - 2 }$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 5$: Trigonometric Functions: $5.69$




