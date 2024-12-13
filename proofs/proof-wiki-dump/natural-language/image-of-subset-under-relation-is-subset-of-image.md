# 

Source: https://proofwiki.org/wiki/Image_of_Subset_under_Relation_is_Subset_of_Image



Theorem
Let $S$ and $T$ be sets.
Let $\RR \subseteq S \times T$ be a relation from $S$ to $T$.
Let $A, B \subseteq S$ such that $A \subseteq B$.

Then the image of $A$ is a subset of the image of $B$:

$A \subseteq B \implies \RR \sqbrk A \subseteq \RR \sqbrk B$

In the notation of direct image mappings, this can be written:

$A \subseteq B \implies \map {\RR^\to} A \subseteq \map {\RR^\to} B$


Corollary 1
The same applies to the preimage, as follows.

Let $C, D \subseteq T$.

Then:

$C \subseteq D \implies \RR^{-1} \sqbrk C \subseteq \RR^{-1} \sqbrk D$
where $\RR^{-1} \sqbrk C$ is the preimage of $C$ under $\RR$.


Corollary 2
The same applies for a mapping $f: S \to T$ and its inverse $f^{-1} \subseteq T \times S$, whether $f^{-1}$ is a mapping or not.

Let $A, B \subseteq S$ such that $A \subseteq B$.

Then the image of $A$ is a subset of the image of $B$:

$A \subseteq B \implies f \sqbrk A \subseteq f \sqbrk B$

This can be expressed in the language and notation of direct image mappings as:

$\forall A, B \in \powerset S: A \subseteq B \implies \map {f^\to} A \subseteq \map {f^\to} B$


Corollary 3
Similarly:

Let $C, D \subseteq T$.

Then:

$C \subseteq D \implies f^{-1} \sqbrk C \subseteq f^{-1} \sqbrk D$

This can be expressed in the language and notation of inverse image mappings as:

$\forall C, D \in \powerset T: C \subseteq D \implies \map {f^\gets} C \subseteq \map {f^\gets} D$


Proof
Suppose $\RR \sqbrk A \nsubseteq \RR \sqbrk B$.














\(\ds \RR \sqbrk A\)

\(\nsubseteq\)







\(\ds \RR \sqbrk B\)














\(\ds \leadsto \ \ \)

\(\ds \exists t \in \RR \sqbrk A: \exists \tuple {s, t} \in \RR: \, \)



\(\ds s\)

\(\notin\)







\(\ds B\)





Definition of Image of Subset under Relation








\(\ds \leadsto \ \ \)

\(\ds \exists s \notin B: \, \)



\(\ds s\)

\(\in\)







\(\ds A\)





Definition of Ordered Pair








\(\ds \leadsto \ \ \)





\(\ds A\)

\(\nsubseteq\)







\(\ds B\)





Definition of Subset




The result follows by the Rule of Transposition.
$\blacksquare$


Sources
1971: Robert H. Kasriel: Undergraduate Topology ... (previous) ... (next): $\S 1.12$: Set Inclusions for Image and Inverse Image Sets: Theorem $12.1$




