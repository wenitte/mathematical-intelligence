# 

Source: https://proofwiki.org/wiki/Nonzero_Natural_Number_is_Successor



Theorem
Let $\N$ be the $0$-based natural numbers:

$\N = \set {0, 1, 2, \ldots}$
Let $s: \N \to \N: \map s n = n + 1$ be the successor mapping.
Then:

$\forall n \in \N \setminus \set 0 \paren {\exists m \in \N: \map s m = n}$


Proof
The proof will proceed by the Principle of Finite Induction on $\N \setminus \set 0$.


Basis for the Induction
$\map s 0 = 1$
So $1$ is the immediate successor of $0$.
This is our basis for the induction.


Induction Hypothesis
This is our induction hypothesis:

$\exists m \in \N: \map s m = k$
Then we need to show:

$\exists m' \in \N: \map s {m'} = k + 1$


Induction Step
This is our induction step:










\(\ds \exists m \in \N: \, \)



\(\ds \map s m\)

\(=\)







\(\ds k\)














\(\ds \leadsto \ \ \)





\(\ds k\)

\(\in\)







\(\ds \N\)





Peano's Axiom $\text P 2$: $n \in P \implies \map s n \in P$








\(\ds \leadsto \ \ \)





\(\ds \map s k\)

\(=\)







\(\ds k + 1\)














\(\ds \leadsto \ \ \)

\(\ds \exists m \in \N: \, \)



\(\ds \map s m\)

\(=\)







\(\ds k + 1\)










Hence the result by the Principle of Finite Induction.
$\blacksquare$





