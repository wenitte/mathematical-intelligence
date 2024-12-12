# 

Source: https://proofwiki.org/wiki/De_Morgan%27s_Laws_(Set_Theory)/Set_Difference/General_Case/Difference_with_Union



Theorem
Let $S$ and $T$ be sets.
Let $\powerset T$ be the power set of $T$.
Let $\mathbb T \subseteq \powerset T$.

Then:

$\ds S \setminus \bigcup \mathbb T = \bigcap_{T' \mathop \in \mathbb T} \paren {S \setminus T'}$
where:

$\ds \bigcup \mathbb T := \set {x: \exists T' \in \mathbb T: x \in T'}$
that is, the union of $\mathbb T$.


Proof
Suppose:

$\ds x \in S \setminus \bigcup \mathbb T$
Note that by Set Difference is Subset we have that $x \in S$ (we need this later).
Then:














\(\ds x\)

\(\in\)







\(\ds S \setminus \bigcup \mathbb T\)














\(\ds \leadstoandfrom \ \ \)





\(\ds x\)

\(\notin\)







\(\ds \bigcup \mathbb T\)





Definition of Set Difference








\(\ds \leadstoandfrom \ \ \)

\(\ds \nexists T' \in \mathbb T: \, \)



\(\ds x\)

\(\in\)







\(\ds T'\)





Definition of Union of Set of Sets








\(\ds \leadstoandfrom \ \ \)

\(\ds \forall T' \in \mathbb T: \, \)



\(\ds x\)

\(\notin\)







\(\ds T'\)





Denial of Existence








\(\ds \leadstoandfrom \ \ \)

\(\ds \forall T' \in \mathbb T: \, \)



\(\ds x\)

\(\in\)







\(\ds S \setminus T'\)





Definition of Set Difference: note $x \in S$ from above








\(\ds \leadstoandfrom \ \ \)





\(\ds x\)

\(\in\)







\(\ds \bigcap_{T' \mathop \in \mathbb T} \paren {S \setminus T'}\)





Definition of Intersection of Set of Sets




Therefore:

$\ds S \setminus \bigcup \mathbb T = \bigcap_{T' \mathop \in \mathbb T} \paren {S \setminus T'}$
$\blacksquare$


Caution
It is tempting to set up an argument to prove the general case using induction. While this works, and is a perfectly valid demonstration for an elementary student in how such proofs are crafted, such a proof is inadequate as it is valid only when $\mathbb T$ is finite.
The proof as given above relies only upon De Morgan's laws as applied to predicate logic. Thus the uncountable case has been reduced to a result in logic. 
However, for better or worse, the following is an example of how one might achieve this result using induction.


Proof by Induction
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


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{I}$: Sets and Functions: Unions and Intersections: Theorem $2 \ \text{(iii)}$




