# 

Source: https://proofwiki.org/wiki/Generalized_Sum_is_Linear



Theorem
Let $\family {z_i}_{i \mathop \in I}$ and $\family {w_i}_{i \mathop \in I}$ be $I$-indexed families of complex numbers.
That is, let $z_i, w_i \in \C$ for all $i \in I$.

Let $\ds \sum \set {z_i: i \in I}$ and $\sum \set {w_i: i \mathop \in I}$ converge to $z, w \in \C$, respectively.

Then:

$(1): \quad \ds \sum \set {z_i + w_i: i \in I}$ converges to $z + w$
$(2): \quad \forall \lambda \in \C: \ds \sum \set {\lambda z_i: i \in I}$ converges to $\lambda z$


Proof
Proof of $(1)$
Let $\epsilon > 0$.
To verify the convergence, it is necessary to find a finite $F \subseteq I$ such that:

$\ds \map d {\sum_{i \mathop\in G} z_i + w_i, z + w} < \epsilon$ for all finite $G$ with $F \subseteq G \subseteq I$

Now let $F_z, F_w \subseteq I$ be finite subsets of $I$ such that:

$\ds \map d {\sum_{i \mathop \in G} z_i, z} < \frac \epsilon 2$ for all finite $G$ with $F_z \subseteq G \subseteq I$
$\ds \map d {\sum_{i \mathop \in G} w_i, w} < \frac \epsilon 2$ for all finite $G$ with $F_w \subseteq G \subseteq I$

The set $F_z \cup F_w$ will be the sought $F$. Let $G$ be finite such that $F_z \cup F_w \subseteq G \subseteq I$.
It follows that:














\(\ds \map d {\sum_{i \mathop \in G} z_i + w_i, z + w}\)

\(=\)







\(\ds \size {\paren {\sum_{i \mathop \in G} z_i + w_i} - \paren {z + w} }\)





Definition of Metric Induced by Norm














\(\ds \)

\(=\)







\(\ds \size {\paren {\sum_{i \mathop \in G} z_i - z} + \paren {\sum_{i \mathop \in G} w_i - w} }\)




















\(\ds \)

\(\le\)







\(\ds \size {\paren {\sum_{i \mathop \in G} z_i - z} } + \size {\paren {\sum_{i \mathop \in G} w_i, w} }\)





Triangle Inequality for $\size {\, \cdot \,}$














\(\ds \)

\(=\)







\(\ds \map d {\sum_{i \mathop\in G} z_i, z} + \map d {\sum_{i \mathop\in G} w_i, w}\)





Definition of Metric Induced by Norm














\(\ds \)

\(<\)







\(\ds \epsilon\)





$F_z, F_w \subseteq G$



From the definition of convergence, it is concluded that:

$\ds \sum \set {z_i + w_i: i \in I} = z + w$
$\Box$


Proof of $(2)$
Let $\epsilon > 0$.
To verify the convergence, it is necessary to find a finite $F \subseteq I$ such that:

$\ds \map d {\sum_{i \mathop\in G} \lambda z_i, \lambda z} < \epsilon$ for all finite $G$ with $F \subseteq G \subseteq I$

Now let $F_z \subseteq I$ be a finite subset of $I$ such that:

$\ds \map d {\sum_{i \mathop \in G} z_i, z} < \frac \epsilon {\size \lambda}$
for all finite $G$ with $F_z \subseteq G \subseteq I$
The set $F_z$ will be the sought $F$.
Let $G$ be finite such that $F_z \subseteq G \subseteq I$.
It follows that:














\(\ds \map d {\sum_{i \mathop \in G} \lambda z_i, \lambda z}\)

\(=\)







\(\ds \size {\paren {\sum_{i \mathop \in G} \lambda z_i} - \lambda z}\)





Definition of Metric Induced by Norm














\(\ds \)

\(=\)







\(\ds \size {\lambda \paren {\sum_{i \mathop \in G} z_i - z} }\)




















\(\ds \)

\(=\)







\(\ds \size \lambda \size {\sum_{i \mathop \in G} z_i - z}\)





Multiplicativity for $\size {\, \cdot \,}$














\(\ds \)

\(=\)







\(\ds \size \lambda \map d {\sum_{i \mathop \in G} z_i, z}\)





Definition of Metric Induced by Norm














\(\ds \)

\(<\)







\(\ds \epsilon\)





$F_z \subseteq G$



From the definition of convergence, conclude that:

$\ds \sum \set {\lambda z_i: i \in I} = \lambda z$
$\blacksquare$


Also see
Convergence of Generalized Sum of Complex Numbers establishes a partial converse.




