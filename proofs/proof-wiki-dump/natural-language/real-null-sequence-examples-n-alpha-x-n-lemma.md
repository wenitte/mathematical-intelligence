# 

Source: https://proofwiki.org/wiki/Real_Null_Sequence/Examples/n%5Ealpha_x%5En/Lemma

Lemma for Real Null Sequence: $n^\alpha x^n$
Let $\alpha \in \Q$ be a (strictly) positive rational number.
Let $x \in \R$ be a real number such that $\size x < 1$.
There exists $N \in \N$ such that:

$\paren {1 + \dfrac 1 N}^{\alpha + 1} \, \size x \le 1$


Proof
Aiming for a contradiction, suppose:

$\forall n \in \N: \paren {1 + \dfrac 1 n}^{\alpha + 1} \, \size x > 1$
Then:










\(\ds \forall n \in \N: \, \)



\(\ds \dfrac 1 n\)

\(>\)







\(\ds \paren {\dfrac 1 {\size x} }^{1 / \paren {\alpha + 1} } - 1\)




















\(\ds \)

\(>\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \paren {\dfrac 1 {\size x} }^{1 / \paren {\alpha + 1} }\)

\(>\)







\(\ds 1\)





as $\dfrac 1 n > 0$ for all $n \in \N$




But this contradicts Sequence of Powers of Reciprocals is Null Sequence.
Hence by Proof by Contradiction:

$\exists N \in \N: \paren {1 + \dfrac 1 N}^{\alpha + 1} \, \size x \le 1$
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 4$: Convergent Sequences: Exercise $\S 4.20 \ (5)$




