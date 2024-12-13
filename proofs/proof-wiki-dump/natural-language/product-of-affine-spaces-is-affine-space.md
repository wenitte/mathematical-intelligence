# 

Source: https://proofwiki.org/wiki/Product_of_Affine_Spaces_is_Affine_Space

Theorem
Let $\EE, \FF$ be affine spaces.
Let $\GG = \EE \times \FF$ be the product of $\EE$ and $\FF$.

Then $\GG$ is an affine space.


Proof
Let $G = \vec \GG$ be the difference space of $\GG$.
We are required to show that the following axioms are satisfied:




\((1)\)  

$:$  





  \(\ds \forall p, q \in \GG:\)

\(\ds p + \paren {q - p} = q \)   







  


\((2)\)  

$:$  





  \(\ds \forall p \in \GG: \forall u, v \in G:\)

\(\ds \paren {p + u} + v = p + \paren {u + v} \)   







  


\((3)\)  

$:$  





  \(\ds \forall p, q \in \GG: \forall u \in G:\)

\(\ds \paren {p - q} + u = \paren {p + u} - q \)   







  


Proof of $(1)$:
Let $p = \tuple {p', p' '}, q = \tuple {q', q' '} \in \GG$.

We have:














\(\ds p + \paren {q - p}\)

\(=\)







\(\ds \tuple {p', p' '} + \paren {\tuple {q', q' '} - \tuple {p', p' '} }\)




















\(\ds \)

\(=\)







\(\ds \tuple {p', p' '} + \tuple {q' - p', q' ' - p' '}\)





Definition of $-$ in Product Space














\(\ds \)

\(=\)







\(\ds \tuple {p' + \paren {q' - p'}, p' ' + \paren {q' ' - p' '} }\)





Definition of $+$ in Product Space














\(\ds \)

\(=\)







\(\ds \tuple {q' , q' '}\)





Axiom $(1)$ in Affine Spaces $\EE$, $\FF$



$\Box$

Proof of $(2)$:
Let $p = \tuple {p', p' '} \in \GG$.
Let $u = \tuple {u', u' '}, v = \tuple {v', v' '} \in G$.

We have:














\(\ds \paren {p + u} + v\)

\(=\)







\(\ds \paren {\tuple {p', p' '} + \tuple {u', u' '} } + \tuple {v', v' '}\)




















\(\ds \)

\(=\)







\(\ds \tuple {p' + u', p' ' + u' '} + \tuple {v', v' '}\)





Definition of $+$ in Product Space














\(\ds \)

\(=\)







\(\ds \tuple {\paren {p' + u'} + v', \paren {p' ' + u' '} + v' '}\)





Definition of $+$ in Product Space














\(\ds \)

\(=\)







\(\ds \tuple {p' + \paren {u' + v'}, p' ' + \paren {u' ' + v' '} }\)





Axiom $(2)$ in Affine Spaces $\EE$, $\FF$














\(\ds \)

\(=\)







\(\ds \tuple {p', p' '} + \paren {\tuple {u', u' '} + \tuple {v', v' '} }\)





Definition of $+$ in Product Space














\(\ds \)

\(=\)







\(\ds p + \paren {u + v}\)









$\Box$

Proof of $(3)$:
Let $p = \tuple {p', p' '}, q = \tuple {q', q' '} \in \GG$.
Let $u = \tuple {u', u' '} \in G$.

We have:














\(\ds \paren {p - q} + u\)

\(=\)







\(\ds \paren {\tuple {p', p' '} - \tuple {q', q' '} } + \tuple {u', u' '}\)




















\(\ds \)

\(=\)







\(\ds \tuple {\paren {p' - q'} + u', \paren {p' ' - q' '} + u' '}\)





Definition of $+,-$ in Product Space














\(\ds \)

\(=\)







\(\ds \tuple {\paren {p' + u'} - q', \paren {p' ' + u' '} - q' '}\)





Axiom $(3)$ in Affine Spaces $\EE$, $\FF$














\(\ds \)

\(=\)







\(\ds \paren {\tuple {p', p' '} + \tuple {u', u' '} } - \tuple {q', q' '}\)





Definition of $+,-$ in Product Space














\(\ds \)

\(=\)







\(\ds \paren {p - q} + u\)









$\blacksquare$





