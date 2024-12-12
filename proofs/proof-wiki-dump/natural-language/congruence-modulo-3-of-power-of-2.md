# 

Source: https://proofwiki.org/wiki/Congruence_Modulo_3_of_Power_of_2



Theorem
Let $n \in \Z_{\ge 0}$ be a positive integer.
Then:

$2^n \equiv \paren {-1}^n \pmod 3$
where $\equiv$ denotes congruence.

That is:

$\exists q \in \Z: 2^n = 3 q + \paren {-1}^n$


Proof
The proof proceeds by induction.
For all $n \in \Z_{\ge 0}$, let $\map P n$ be the proposition:

$2^n \equiv \paren {-1}^n \pmod 3$

$\map P 0$ is the case:














\(\ds 2^0\)

\(=\)







\(\ds 1\)




















\(\ds \)

\(=\)







\(\ds \paren {-1}^0\)




















\(\ds \)

\(\equiv\)







\(\ds \paren {-1}^0\)

\(\ds \pmod 3\)








Thus $\map P 0$ is seen to hold.


Basis for the Induction
$\map P 1$ is the case:














\(\ds 2^1\)

\(=\)







\(\ds 2\)




















\(\ds \)

\(=\)







\(\ds 3 + \paren {-1}\)




















\(\ds \)

\(=\)







\(\ds 3 + \paren {-1}^1\)




















\(\ds \)

\(\equiv\)







\(\ds \paren {-1}^1\)

\(\ds \pmod 3\)







Thus $\map P 1$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P k$ is true, where $k \ge 2$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

$2^k \equiv \paren {-1}^k \pmod 3$

from which it is to be shown that:

$2^{k + 1} \equiv \paren {-1}^{k + 1} \pmod 3$


Induction Step
This is the induction step:















\(\ds 2^{k + 1}\)

\(=\)







\(\ds 2 \times 2^k\)




















\(\ds \)

\(=\)







\(\ds 2 \times \paren {3 q + \paren {-1}^k}\)




















\(\ds \)

\(=\)







\(\ds \paren {3 \paren {2 q} + 2 \paren {-1}^k}\)




















\(\ds \)

\(=\)







\(\ds \paren {3 \paren {2 q} + 2 \paren {-1}^k}\)










If $k$ is odd, this means:














\(\ds 2^{k + 1}\)

\(\equiv\)







\(\ds -2\)

\(\ds \pmod 3\)


















\(\ds \)

\(\equiv\)







\(\ds 1\)

\(\ds \pmod 3\)


















\(\ds \)

\(\equiv\)







\(\ds \paren {-1}^{k + 1}\)

\(\ds \pmod 3\)








If $k$ is even, this means:














\(\ds 2^{k + 1}\)

\(\equiv\)







\(\ds 2\)

\(\ds \pmod 3\)


















\(\ds \)

\(\equiv\)







\(\ds -1\)

\(\ds \pmod 3\)


















\(\ds \)

\(\equiv\)







\(\ds \paren {-1}^{k + 1}\)

\(\ds \pmod 3\)








So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \Z_{\ge 0}: 2^n \equiv \paren {-1}^n \pmod 3$
$\blacksquare$





