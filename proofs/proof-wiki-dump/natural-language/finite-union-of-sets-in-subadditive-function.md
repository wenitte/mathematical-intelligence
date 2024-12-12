# 

Source: https://proofwiki.org/wiki/Finite_Union_of_Sets_in_Subadditive_Function



Theorem
Let $\AA$ be an algebra of sets.
Let $f: \AA \to \overline \R$ be a subadditive function.
Let $A_1, A_2, \ldots, A_n$ be any finite collection of elements of $\AA$.
Then:

$\ds \map f {\bigcup_{i \mathop = 1}^n A_i} \le \sum_{i \mathop = 1}^n \map f {A_i}$

That is, for any finite collection of elements of $\AA$, $f$ of their union is less than or equal to the sum of $f$ of the individual elements.


Proof
Proof by induction:
In the below, let $A_1, A_2, \ldots$ all be elements of $\AA$.

For all $n \in \N_{>0}$, let $\map P n$ be the proposition:

$\ds \map f {\bigcup_{i \mathop = 1}^n A_i} \le \sum_{i \mathop = 1}^n \map f {A_i}$

$\map P 1$ is trivially true, as this just says $\map f {A_1} \le \map f {A_1}$.


Basis for the Induction
$\map P 2$ is the case $\map f {A_1 \cup A_2} \le \map f {A_1} + \map f {A_2}$, which comes from the definition of a subadditive function.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 2$, then it logically follows that $\map P {k + 1}$ is true.
So this is our induction hypothesis:

$\ds \map f {\bigcup_{i \mathop = 1}^k A_i} \le \sum_{i \mathop = 1}^k \map f {A_i}$
Then we need to show:

$\ds \map f {\bigcup_{i \mathop = 1}^{k + 1} A_i} \le \sum_{i \mathop = 1}^{k + 1k + 1} \map f {A_i}$


Induction Step
This is our induction step:














\(\ds \map f {\bigcup_{i \mathop = 1}^{k + 1} A_i}\)

\(=\)







\(\ds \map f {\bigcup_{i \mathop = 1}^k A_i \cup A_{k + 1} }\)




















\(\ds \)

\(\le\)







\(\ds \map f {\bigcup_{i \mathop = 1}^k A_i} + \map f {A_{k + 1} }\)





from the base case














\(\ds \)

\(\le\)







\(\ds \sum_{i \mathop = 1}^k \map f {A_i} + \map f {A_{k + 1} }\)





from the induction hypothesis














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^{k + 1} \map f {A_i}\)










So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\ds \forall n \in \N_{>0}: \paren {\bigcup_{i \mathop = 1}^n A_i} \le \sum_{i \mathop = 1}^n \map f {A_i}$
$\blacksquare$





