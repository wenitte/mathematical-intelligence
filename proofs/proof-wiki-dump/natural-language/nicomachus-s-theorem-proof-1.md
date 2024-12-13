# 

Source: https://proofwiki.org/wiki/Nicomachus%27s_Theorem/Proof_1



Theorem













\(\ds 1^3\)

\(=\)







\(\ds 1\)




















\(\ds 2^3\)

\(=\)







\(\ds 3 + 5\)




















\(\ds 3^3\)

\(=\)







\(\ds 7 + 9 + 11\)




















\(\ds 4^3\)

\(=\)







\(\ds 13 + 15 + 17 + 19\)




















\(\ds \vdots\)

\(\)







\(\ds \)










In general:

$\forall n \in \N_{>0}: n^3 = \paren {n^2 - n + 1} + \paren {n^2 - n + 3} + \dotsb + \paren {n^2 + n - 1}$

In particular, the first term for $\paren {n + 1}^3$ is $2$ greater than the last term for $n^3$.


Proof
Proof by induction:
For all $n \in \N_{>0}$, let $\map P n$ be the proposition:

$n^3 = \paren {n^2 - n + 1} + \paren {n^2 - n + 3} + \dotsb + \paren {n^2 + n - 1}$


Basis for the Induction
$\map P 1$ is true, as this just says $1^3 = 1$.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$k^3 = \paren {k^2 - k + 1} + \paren {k^2 - k + 3} + \dotsb + \paren {k^2 + k - 1}$

Then we need to show:

$\paren {k + 1}^3 = \paren {\paren {k + 1}^2 - \paren {k + 1} + 1} + \paren {\paren {k + 1}^2 - \paren {k + 1} + 3} + \dotsb + \paren {\paren {k + 1}^2 + \paren {k + 1} - 1}$


Induction Step
Let $T_k = \paren {k^2 - k + 1} + \paren {k^2 - k + 3} + \dotsb + \paren {k^2 + k - 1}$.
We can express this as:

$T_k = \paren {k^2 - k + 1} + \paren {k^2 - k + 3} + \dotsb + \paren {k^2 - k + 2k - 1}$
We see that there are $k$ terms in $T_k$.

Let us consider the general term $\paren {\paren {k + 1}^2 - \paren {k + 1} + j}$ in $T_{k+1}$:














\(\ds \paren {k + 1}^2 - \paren {k + 1} + j\)

\(=\)







\(\ds k^2 + 2 k + 1 - \paren {k + 1} + j\)




















\(\ds \)

\(=\)







\(\ds k^2 - k + j + 2 k\)










So, in $T_{k + 1}$, each of the terms is $2 k$ larger than the corresponding term for $T_k$.
So:














\(\ds T_{k + 1}\)

\(=\)







\(\ds T_k + k \paren {2 k} + \paren {k + 1}^2 + \paren {k + 1} - 1\)




















\(\ds \)

\(=\)







\(\ds k^3 + k \paren {2 k} + \paren {k + 1}^2 + \paren {k + 1} - 1\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds k^3 + 2 k^2 + k^2 + 2 k + 1 + k + 1 - 1\)




















\(\ds \)

\(=\)







\(\ds k^3 + 3 k^2 + 3 k + 1\)




















\(\ds \)

\(=\)







\(\ds \paren {k + 1}^3\)










So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \N_{>0}: n^3 = \paren {n^2 - n + 1} + \paren {n^2 - n + 3} + \dotsb + \paren {n^2 + n - 1}$

Finally, note that the first term in the expansion for $\paren {n + 1}^3$ is $n^2 - n + 1 + 2 n = n^2 + n + 1$.
This is indeed two more than the last term in the expansion for $n^3$ .
$\blacksquare$


Source of Name
This entry was named for Nicomachus of Gerasa.


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.1$: Mathematical Induction: Exercise $8 \ \text{(a)}$




