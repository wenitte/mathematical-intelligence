# 

Source: https://proofwiki.org/wiki/Measure_of_Limit_of_Decreasing_Sequence_of_Measurable_Sets



Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space. 
Let $E \in \Sigma$.
Let $\sequence {E_n}_{n \mathop \in \N}$ be an decreasing sequence of $\Sigma$-measurable sets such that: 

$E_n \downarrow E$
where $E_n \downarrow E$ denotes the limit of decreasing sequence of sets.
Suppose also that $\map \mu {E_1} < \infty$. 

Then: 

$\ds \map \mu E = \lim_{n \mathop \to \infty} \map \mu {E_n}$


Corollary
Let $F \in \Sigma$.
Let $\sequence {F_n}_{n \mathop \in \N}$ be an decreasing sequence of $\Sigma$-measurable sets such that: 

$F_n \downarrow F$
where $F_n \downarrow F$ denotes the limit of decreasing sequence of sets.
Suppose also that $\map \mu {F_m} < \infty$ for some $m \in \N$. 

Then: 

$\ds \map \mu F = \lim_{n \mathop \to \infty} \map \mu {F_n}$


Proof
From Relative Complement of Decreasing Sequence of Sets is Increasing, we have: 

$\sequence {E_1 \setminus E_n}_{n \mathop \in \N}$ is increasing.
Further, we have: 














\(\ds \bigcup_{n \mathop = 1}^\infty \paren {E_1 \setminus E_n}\)

\(=\)







\(\ds E_1 \setminus \paren {\bigcap_{n \mathop = 1}^\infty E_n}\)





De Morgan's Law for Set Differences: General Case














\(\ds \)

\(=\)







\(\ds E_1 \setminus E\)





Definition of Limit of Decreasing Sequence of Sets



so:

$E_1 \setminus E_n \uparrow E_1 \setminus E$
So, from Measure of Limit of Increasing Sequence of Measurable Sets, we have: 

$\ds \map \mu {E_1 \setminus E} = \lim_{n \mathop \to \infty} \map \mu {E_1 \setminus E_n}$
From Measure of Set Difference with Subset, we have: 

$\ds \map \mu {E_1} - \map \mu E = \lim_{n \mathop \to \infty} \paren {\map \mu {E_1} - \map \mu {E_n} }$
since $\map \mu {E_1} < \infty$. 
From the Difference Rule for Real Sequences, we then have: 

$\ds \map \mu {E_1} - \map \mu E = \map \mu {E_1} - \lim_{n \mathop \to \infty} \map \mu {E_n}$
giving:

$\ds \map \mu E = \lim_{n \mathop \to \infty} \map \mu {E_n}$
$\blacksquare$


Also see
Signed Measure of Limit of Decreasing Sequence of Measurable Sets




