# 

Source: https://proofwiki.org/wiki/Permutation/Examples/Addition_of_Constant_on_Integers

Examples of Permutations
Let $\Z$ denote the set of integers.
Let $a \in \Z$.
Let $f: \Z \to \Z$ denote the mapping defined as:

$\forall x \in \Z: \map f x = x + a$
Then $f$ is a permutation on $\Z$.


Proof









\(\ds \forall x, y \in \Z: \, \)



\(\ds \map f x\)

\(=\)







\(\ds \map f y\)














\(\ds \leadsto \ \ \)





\(\ds x + a\)

\(=\)







\(\ds y + a\)





Definition of $f$








\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds y\)









demonstrating that $f$ is injective.

Then:










\(\ds \forall y \in \Z: \, \)



\(\ds y\)

\(=\)







\(\ds \paren {y - a} + a\)




















\(\ds \)

\(=\)







\(\ds \map f {y - a}\)





Definition of $f$



As $y - a \in \Z$ it follows that $f$ is a surjection.

So $f$ is both an injection and a surjection.
By definition, then, $f$ is a bijection.
As the domain and codomain of $f$ is the same, $f$ is by definition a permutation.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 3.6$. Products of bijective mappings. Permutations: Example $55$




