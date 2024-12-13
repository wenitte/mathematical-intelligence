# 

Source: https://proofwiki.org/wiki/Preimage_of_Image_of_Subset_under_Injection_equals_Subset



Theorem
Let $f: S \to T$ be an injection.

Then:

$\forall A \subseteq S: A = \paren {f^{-1} \circ f} \sqbrk A$
where:

$f \sqbrk A$ denotes the image of $A$ under $f$
$f^{-1}$ denotes the inverse of $f$
$f^{-1} \circ f$ denotes composition of $f^{-1}$ and $f$.


Proof
Let $f$ be an injection.
From Subset of Domain is Subset of Preimage of Image, we have that:

$\forall A \subseteq S: A \subseteq \paren {f^{-1} \circ f} \sqbrk A$
by dint of $f$ being a relation.
So what we need to do is show that:

$\forall A \subseteq S: \paren {f^{-1} \circ f} \sqbrk A \subseteq A$

Take any $A \subseteq S$.
Let $x \in A$.
We have:














\(\ds x\)

\(\in\)







\(\ds \paren {f^{-1} \circ f} \sqbrk A\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(\in\)







\(\ds f^{-1} \sqbrk {f \sqbrk A}\)





Definition of Composition of Mappings








\(\ds \leadsto \ \ \)





\(\ds \map f x\)

\(\in\)







\(\ds f \sqbrk A\)





Definition of Inverse of Mapping








\(\ds \leadsto \ \ \)

\(\ds \exists y \in A: \, \)



\(\ds \map f x\)

\(=\)







\(\ds \map f y\)





Definition of Image of Subset under Mapping








\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds y\)





Definition of Injection








\(\ds \leadsto \ \ \)





\(\ds x\)

\(\in\)







\(\ds A\)





as $y \in A$




Thus we see that:

$\paren {f^{-1} \circ f} \sqbrk A \subseteq A$
and hence the result:

$\forall A \subseteq S: A = \paren {f^{-1} \circ f} \sqbrk A$
$\blacksquare$


Also see
Subset equals Preimage of Image implies Injection
Subset equals Preimage of Image iff Mapping is Injection


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 10$: Inverses and Composites
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 5$. Induced mappings; composition; injections; surjections; bijections: Theorem $5.8$
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 6$: Functions: Exercise $1 \ \text{(c})$
2000: James R. Munkres: Topology (2nd ed.) ... (previous) ... (next): $1$: Set Theory and Logic: $\S 2$: Functions




