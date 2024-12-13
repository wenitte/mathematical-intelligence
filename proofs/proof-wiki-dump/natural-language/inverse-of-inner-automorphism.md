# 

Source: https://proofwiki.org/wiki/Inverse_of_Inner_Automorphism

Theorem
Let $G$ be a group.
Let $x \in G$.
Let $\kappa_x$ be the inner automorphism of $G$ given by $x$.

Then:

$\paren {\kappa_x}^{-1} = \kappa_{x^{-1} }$


Proof
Let $G$ be a group whose identity is $e$.
Let $x \in G$.
Let $\kappa_x \in \Inn G$.
Then from the definition of inner automorphism:

$\forall g \in G: \map {\kappa_x} g = x g x^{-1}$

As $G$ is a group:

$x \in G \implies x^{-1} \in G$
So:

$\kappa_{x^{-1} } \in \Inn G$
and is defined as:

$\forall g \in G: \map {\kappa_{x^{-1} } } g = x^{-1} g \paren {x^{-1} }^{-1} = x^{-1} g x$

Now we need to show that:

$\kappa_x \circ \kappa_{x^{-1} } = I_G = \kappa_{x^{-1} } \circ \kappa_x$
where $I_G: G \to G$ is the identity mapping.

So:










\(\ds \forall g \in G: \, \)



\(\ds \map {\kappa_x \circ \kappa_{x^{-1} } } g\)

\(=\)







\(\ds \map {\kappa_x} {\map {\kappa_{x^{-1} } } g}\)





Definition of Composition of Mappings














\(\ds \)

\(=\)







\(\ds \map {\kappa_x } {x^{-1} g x}\)





Definition of $\kappa_{x^{-1} }$














\(\ds \)

\(=\)







\(\ds x \paren {x^{-1} g x} x^{-1}\)





Definition of $\kappa_x$














\(\ds \)

\(=\)







\(\ds g\)





Group Properties














\(\ds \)

\(=\)







\(\ds x^{-1} \paren {x g x^{-1} } x\)





Group Properties














\(\ds \)

\(=\)







\(\ds \map {\kappa_{x^{-1} } } {x g x^{-1} }\)





Definition of $\kappa_{x^{-1} }$














\(\ds \)

\(=\)







\(\ds \map {\kappa_{x^{-1} } } {\map {\kappa_x} g}\)





Definition of $\kappa_x$














\(\ds \)

\(=\)







\(\ds \map {\kappa_{x^{-1} } \circ \kappa_x} g\)





Definition of Composition of Mappings




Thus:

$\forall g \in G: \map {\kappa_x \circ \kappa_{x^{-1} } } g = \map {I_G} g = \map {\kappa_{x^{-1} } \circ \kappa_x} g$
Hence the result.
$\blacksquare$





