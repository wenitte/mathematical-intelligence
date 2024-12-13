# 

Source: https://proofwiki.org/wiki/Pointwise_Inverse_in_Induced_Structure

Theorem
Let $\struct {G, \oplus}$ be a group whose identity is $e_G$.
Let $S$ be a set.
Let $\struct {G^S, \oplus}$ be the structure on $G^S$ induced by $\oplus$.

Let $f \in G^S$.
Let $f^* \in G^S$ be the pointwise inverse of $f$:

$\forall x \in S: \map {f^*} x = \paren {\map f x}^{-1}$

Then $f^*$ is the inverse of $f$ for the pointwise operation induced on $G^S$ by $\oplus$.


Proof
Let $f \in G^S$.














\(\ds \map {\paren {f \oplus f^*} } x\)

\(=\)







\(\ds \map f x \oplus \map {f^*} x\)




















\(\ds \)

\(=\)







\(\ds \map f x \oplus \paren {\map f x}^{-1}\)




















\(\ds \)

\(=\)







\(\ds e_G\)









Similarly for $\map {\paren {f^* \oplus f} } x$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 13$: Compositions Induced on Cartesian Products and Function Spaces: Theorem $13.6: \ 3^\circ$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 13$: Compositions Induced on Cartesian Products and Function Spaces: Exercise $13.4$




