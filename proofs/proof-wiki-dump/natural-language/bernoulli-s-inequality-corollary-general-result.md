# 

Source: https://proofwiki.org/wiki/Bernoulli%27s_Inequality/Corollary/General_Result



Theorem
For all $n \in \Z_{\ge 0}$:

$\ds \prod_{j \mathop = 1}^n \paren {1 - a_j} \ge 1 - \sum_{j \mathop = 1}^n a^j$
where $0 < a_j < 1$ for all $j$.


Proof
The proof proceeds by induction.
For all $n \in \Z_{\ge 0}$, let $\map P n$ be the proposition:

$\ds \prod_{j \mathop = 1}^n \paren {1 - a_j} \ge 1 - \sum_{j \mathop = 1}^n a^j$

$\map P 0$ is the case:














\(\ds \prod_{j \mathop = 1}^0 \paren {1 - a_j}\)

\(=\)







\(\ds 1\)





Definition of Vacuous Product














\(\ds \)

\(\ge\)







\(\ds 1 - 0\)




















\(\ds \)

\(=\)







\(\ds 1 - \sum_{j \mathop = 1}^0 a^j\)





Definition of Vacuous Summation



Thus $\map P 0$ is seen to hold.


Basis for the Induction
$\map P 1$ is the case:














\(\ds \prod_{j \mathop = 1}^1 \paren {1 - a_j}\)

\(=\)







\(\ds 1 - a_j\)




















\(\ds \)

\(=\)







\(\ds 1 - \sum_{j \mathop = 1}^1 a^j\)









Thus $\map P 1$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

$\ds \prod_{j \mathop = 1}^k \paren {1 - a_j} \ge 1 - \sum_{j \mathop = 1}^k a^j$

from which it is to be shown that:

$\ds \prod_{j \mathop = 1}^{k + 1} \paren {1 - a_j} \ge 1 - \sum_{j \mathop = 1}^{k + 1} a^j$


Induction Step
This is the induction step:














\(\ds \prod_{j \mathop = 1}^{k + 1} \paren {1 - a_j}\)

\(=\)







\(\ds \paren {\prod_{j \mathop = 1}^k \paren {1 - a_j} } \paren {1 - a_{k + 1} }\)





Definition of Continued Product














\(\ds \)

\(\ge\)







\(\ds \paren {1 - \sum_{j \mathop = 1}^k a^j} \paren {1 - a_{k + 1} }\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds 1 - \sum_{j \mathop = 1}^k a^j - a_{k + 1} + a_{k + 1} \sum_{j \mathop = 1}^k a^j\)




















\(\ds \)

\(=\)







\(\ds 1 - \sum_{j \mathop = 1}^{k + 1} a^j + a_{k + 1} \sum_{j \mathop = 1}^k a^j\)




















\(\ds \)

\(\ge\)







\(\ds 1 - \sum_{j \mathop = 1}^{k + 1} a^j\)










So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\ds \forall n \in \Z_{\ge 0}: \prod_{j \mathop = 1}^n \paren {1 - a_j} \ge 1 - \sum_{j \mathop = 1}^n a^j$
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.3$: Sums and Products: Exercise $27$




