# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Dominate_(Set_Theory)



Theorem
Let $S, T$ be sets.

The following definitions of the concept of Dominate in the context of Set Theory are equivalent:

Definition 1
Then $S$ is dominated by $T$ if and only if there exists an injection from $S$ to $T$.

Definition 2
Then $S$ is dominated by $T$ if and only if $S$ is equivalent to some subset of $T$.
That is, if and only if there exists a bijection $f: S \to T'$ for some $T' \subseteq T$.


Proof
Definition 1 implies Definition 2
Let $f: S \to T$ be an injection.
By Injection to Image is Bijection, $f$ is a bijection from $S$ to the image of $f$.
$\Box$


Definition 2 implies Definition 1
Let $T' \subseteq T$ such that there exists a bijection $f: S \to T'$.
Let $i: T' \to T$ be the inclusion of $T'$ in $T$.

Then by Composite of Injections is Injection, $i \circ f: S \to T$ is an injection.
$\blacksquare$


Sources
1964: Steven A. Gaal: Point Set Topology ... (previous) ... (next): Introduction to Set Theory: $2$. Set Theoretical Equivalence and Denumerability




