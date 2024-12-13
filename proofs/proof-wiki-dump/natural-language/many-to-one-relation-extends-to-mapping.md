# 

Source: https://proofwiki.org/wiki/Many-to-One_Relation_Extends_to_Mapping

Theorem
Let $S$ and $T$ be sets.
Let $T$ be non-empty.
Let $\RR \subset S \times T$ be a many-to-one relation.

Then there exists a mapping $f: S \to T$ such that $\RR \subseteq f$.


Proof
Since $T$ is not empty, it has an element $t_0$.
Define a mapping $g: S \setminus \Preimg \RR$ by letting $\map g x = t_0$ for all $x \in S$.
Let $f = \RR \cup g$ be a relation on $S \times T$.
By Union of Many-to-One Relations with Disjoint Domains is Many-to-One, $f$ is a many-to-one relation.
By Union with Relative Complement, $f$ is total.
Thus $f$ is a mapping.
$\blacksquare$

Law of the Excluded Middle
This theorem depends on the Law of the Excluded Middle, by way of Union with Relative Complement.
This is one of the logical axioms that was determined by Aristotle, and forms part of the backbone of classical (Aristotelian) logic.
However, the intuitionist school rejects the Law of the Excluded Middle as a valid logical axiom.
This in turn invalidates this theorem from an intuitionistic perspective.





