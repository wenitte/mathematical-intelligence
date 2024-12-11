# 

Source: https://proofwiki.org/wiki/1%2B2%2B...%2Bn%2B(n-1)%2B...%2B1_%3D_n%5E2/Proof_3



Theorem
$\forall n \in \N: 1 + 2 + \cdots + n + \paren {n - 1} + \cdots + 1 = n^2$


Proof
Proof by induction:

Basis for the Induction
$n = 1$ holds trivially.
Just to make sure, we try $n = 2$:

$1 + 2 + 1 = 4$
Likewise $n^2 = 2^2 = 4$.
So shown for basis for the induction.


Induction Hypothesis
This is the induction hypothesis:

$1 + 2 + \cdots + k + \paren {k - 1} + \cdots + 1 = k^2$
Now we need to show true for $n = k + 1$:

$1 + 2 + \cdots + \paren {k + 1} + k + \paren {k - 1} + \cdots + 1 = \paren {k + 1}^2$


Induction Step
This is the induction step:














\(\ds \)

\(\)







\(\ds 1 + 2 + \cdots + \paren {k + 1} + k + \paren {k - 1} + \cdots + 1\)




















\(\ds \)

\(=\)







\(\ds \paren {1 + 2 + \cdots + k + \paren {k - 1} + \cdots + 1} + k + \paren {k + 1}\)




















\(\ds \)

\(=\)







\(\ds k^2 + k + \paren {k + 1}\)





from induction hypothesis














\(\ds \)

\(=\)







\(\ds k^2 + 2k + 1\)




















\(\ds \)

\(=\)







\(\ds \paren {k + 1}^2\)









The result follows by induction.
$\blacksquare$





