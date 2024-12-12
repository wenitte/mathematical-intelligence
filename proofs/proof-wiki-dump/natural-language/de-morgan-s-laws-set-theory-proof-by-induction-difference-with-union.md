# 

Source: https://proofwiki.org/wiki/De_Morgan%27s_Laws_(Set_Theory)/Proof_by_Induction/Difference_with_Union



Theorem
Let $\mathbb T = \set {T_i: i \mathop \in I}$, where each $T_i$ is a set and $I$ is some finite indexing set.

Then:

$\ds S \setminus \bigcup_{i \mathop \in I} T_i = \bigcap_{i \mathop \in I} \paren {S \setminus T_i}$


Proof
Let the cardinality $\size I$ of the indexing set $I$ be $n$.
Then by the definition of cardinality, it follows that $I \cong \N^*_n$ and we can express the proposition:

$\ds S \setminus \bigcup_{i \mathop \in I} T_i = \bigcap_{i \mathop \in I} \paren {S \setminus T_i}$
as:

$\ds S \setminus \bigcup_{i \mathop = 1}^n T_i = \bigcap_{i \mathop = 1}^n \paren {S \setminus T_i}$
The proof of this is more amenable to proof by Principle of Mathematical Induction.

For all $n \in \N_{>0}$, let $\map P n$ be the proposition:

$\ds S \setminus \bigcup_{i \mathop = 1}^n T_i = \bigcap_{i \mathop = 1}^n \paren {S \setminus T_i}$.

$\map P 1$ is true, as this just says $S \setminus T_1 = S \setminus T_1$.


Base Case
$\map P 2$ is the case:

$S \setminus \paren {T_1 \cup T_2} = \paren {S \setminus T_1} \cap \paren {S \setminus T_2}$
which has been proved.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 2$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\ds S \setminus \bigcup_{i \mathop = 1}^k T_i = \bigcap_{i \mathop = 1}^k \paren {S \setminus T_i}$


Induction Step
Now we need to show:

$\ds S \setminus \bigcup_{i \mathop = 1}^{k + 1} T_i = \bigcap_{i \mathop = 1}^{k + 1} \paren {S \setminus T_i}$

This is our induction step:














\(\ds S \setminus \bigcup_{i \mathop = 1}^{k + 1} T_i\)

\(=\)







\(\ds S \setminus \paren {\bigcup_{i \mathop = 1}^k T_i \cup T_{k + 1} }\)





Union is Associative














\(\ds \)

\(=\)







\(\ds \paren {S \setminus \bigcup_{i \mathop = 1}^k T_i} \cap \paren {S \setminus T_{k + 1} }\)





Base case














\(\ds \)

\(=\)







\(\ds \paren {\bigcap_{i \mathop = 1}^k \paren {S \setminus T_i} } \cap \paren {S \setminus T_{k + 1} }\)





Induction hypothesis














\(\ds \)

\(=\)







\(\ds \bigcap_{i \mathop = 1}^{k + 1} \paren {S \setminus T_i}\)





Intersection is Associative



So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\ds S \setminus \bigcup_{i \mathop = 1}^n T_i = \bigcap_{i \mathop = 1}^n \paren {S \setminus T_i}$
that is:

$\ds S \setminus \bigcup_{i \mathop \in I} T_i = \bigcap_{i \mathop \in I} \paren {S \setminus T_i}$
$\blacksquare$


Source of Name
This entry was named for Augustus De Morgan.





