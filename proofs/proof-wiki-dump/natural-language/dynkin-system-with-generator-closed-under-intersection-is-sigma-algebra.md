# 

Source: https://proofwiki.org/wiki/Dynkin_System_with_Generator_Closed_under_Intersection_is_Sigma-Algebra

Theorem
Let $X$ be a set.
Let $\GG \subseteq \powerset X$ be a collection of subsets of $X$.
Suppose that $\GG$ satisfies the following condition:

$(1):\quad \forall G, H \in \GG: G \cap H \in \GG$
That is, $\GG$ is closed under intersection.

Then:

$\map \delta \GG = \map \sigma \GG$
where $\delta$ denotes generated Dynkin system, and $\sigma$ denotes generated $\sigma$-algebra.


Proof
From Sigma-Algebra is Dynkin System and the definition of generated Dynkin system, it follows that:

$\map \delta \GG \subseteq \map \sigma \GG$

Let $D \in \map \delta \GG$, and define:

$\delta_D := \set {E \subseteq X: E \cap D \in \map \delta \GG}$
Let us verify that these $\delta_D$ form Dynkin systems.

First of all, note $X \cap D = D$, hence $X \in \delta_D$.
Next, compute, for any $E \in \delta_D$:














\(\ds \paren {X \setminus E} \cap D\)

\(=\)







\(\ds \paren {\paren {X \setminus E} \cap D} \cup \paren {\paren {X \setminus D} \cap D}\)





Set Difference Intersection with Second Set is Empty Set, Union with Empty Set














\(\ds \)

\(=\)







\(\ds \paren {\paren {X \setminus E} \cup \paren {X \setminus D} } \cap D\)





Intersection Distributes over Union














\(\ds \)

\(=\)







\(\ds \paren {X \setminus \paren {E \cap D} } \cap D\)





De Morgan's Laws: Difference with Intersection














\(\ds \)

\(=\)







\(\ds \paren {X \setminus \paren {E \cap D} } \cap \paren {X \setminus \paren {X \setminus D} }\)





Set Difference with Set Difference














\(\ds \)

\(=\)







\(\ds X \setminus \paren {\paren {E \cap D} \cup \paren {X \setminus D} }\)





De Morgan's Laws: Difference with Union



Now from Intersection is Associative, Set Difference Intersection with Second Set is Empty Set and Intersection with Empty Set:

$\paren {E \cap D} \cap \paren {X \setminus D} = E \cap \paren {D \cap \paren {X \setminus D} } = E \cap \O = \O$
Thus, since $E \cap D, X \setminus D \in \map \delta \GG$, it follows that their disjoint union is as well.
Finally, combining the above, it follows that:

$\paren {X \setminus E} \cap D \in \map \delta \GG$
Thus:

$E \in \delta_D \implies X \setminus E \in \delta_D$

Finally, let $\sequence {E_n}_{n \mathop \in \N}$ be a pairwise disjoint sequence of sets in $\delta_D$.
Then it is immediate that $\sequence {E_n \cap D}_{n \mathop \in \N}$ is also pairwise disjoint.

Hence:














\(\ds \paren {\bigcup_{n \mathop \in \N} E_n} \cap D\)

\(=\)







\(\ds \bigcup_{n \mathop \in \N} \paren {E_n \cap D}\)





Intersection Distributes over Union



and since the $E_n \cap D$ are in $\map \delta \GG$ by assumption, this disjoint union is also in $\map \delta \GG$.
Therefore, $\delta_D$ is a Dynkin system.

Now by definition of generated Dynkin system, $\GG \subseteq \map \delta \GG$.
By this observation and $(1)$, we immediately obtain, for any $G \in \GG$:

$\GG \subseteq \delta_G$
Therefore, by definition of generated Dynkin system, for all $G \in \GG$:

$\map \delta \GG \subseteq \delta_G$

Hence, for any $D \in \map \delta \GG$ and $G \in \GG$:

$D \cap G \in \map \delta \GG$
Thus we have established that, for all $D \in \map \delta \GG$:

$\GG \subseteq \delta_D$
whence, by the definition of $\delta_D$ and generated Dynkin system:

$\map \delta \GG \subseteq \delta_D$

That is to say:

$\forall D, E \in \map \delta \GG: D \cap E \in \map \delta \GG$
Hence, by Dynkin System Closed under Intersections is Sigma-Algebra, $\map \delta \GG$ is a $\sigma$-algebra.
Thus, it follows that $\map \sigma \GG \subseteq \map \delta \GG$.

Hence the result, by definition of set equality.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $5.5$




