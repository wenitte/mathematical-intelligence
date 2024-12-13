# 

Source: https://proofwiki.org/wiki/Product_Rule_for_Sequence_in_Normed_Algebra

Theorem
Let $\GF \in \set {\R, \C}$. 
Let $\struct {A, \norm {\, \cdot \,} }$ be a normed algebra over $\GF$. 
Let $\sequence {a_n}_{n \in \N}$ and $\sequence {b_n}_{n \in \N}$ be sequences in $A$ converging to $a$ and $b$ respectively. 

Then: 

$a_n b_n \to a b$


Proof
From Convergent Sequence in Normed Vector Space is Bounded, there exists $M > 0$ such that: 

$\norm {a_n} \le M$ for each $n \in \N$.
We have for $n \in \N$: 














\(\ds \norm {a_n b_n - a b}\)

\(=\)







\(\ds \norm {a_n b_n - a_n b + a_n b - a b}\)




















\(\ds \)

\(=\)







\(\ds \norm {a_n \paren {b_n - b} + b \paren {a_n - a} }\)




















\(\ds \)

\(\le\)







\(\ds \norm {a_n \paren {b_n - b} } + \norm {b \paren {a_n - a} }\)





Norm Axiom $\text N 3$: Triangle Inequality














\(\ds \)

\(\le\)







\(\ds \norm {a_n} \norm {b_n - b} + \norm b \norm {a_n - a}\)




















\(\ds \)

\(\le\)







\(\ds M \norm {b_n - b} + \norm b \norm {a_n - a}\)




















\(\ds \)

\(\to\)







\(\ds 0\)









So from Sequence in Normed Vector Space Convergent to Limit iff Norm of Sequence minus Limit is Null Sequence, we have: 

$a_n b_n \to a b$
$\blacksquare$





