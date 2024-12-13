# 

Source: https://proofwiki.org/wiki/Kelvin-Stokes_Theorem


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $S$ be some orientable smooth surface with boundary in $\R^3$.
Let $\mathbf F:\R^3 \to \R^3$ be a vector-valued function with Euclidean coordinate expression:

$\mathbf F = f_1 \mathbf i + f_2 \mathbf j + f_3 \mathbf k$
where $f_i: \R^3 \to \R$.
Then:

$\ds \oint_{\partial S} f_1 \rd x + f_2 \rd y + f_3 \rd z = \iint_S \paren {\nabla \times \mathbf F} \cdot \mathbf n \rd A$
where $\mathbf n$ is the unit normal to $S$ and $\d A$ is the area element on the surface.



This article is complete as far as it goes, but it could do with expansion.In particular: Also need to put this in the form $\ds \int_S \nabla \times \mathbf F \cdot \mathbf n \rd A = \int_C \mathbf F \cdot \d s$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding this information.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Expand}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Proof
Let $\mathbf r:\R^2 \to \R^3, \map {\mathbf r} {s, t}$ be a smooth parametrization of $S$ from some region $R$ in the $st$-plane, so that:

$\map {\mathbf r} R = S$
and:

$\map {\mathbf r} {\partial R} = \partial S$
First, we convert the left hand side into a line integral:














\(\ds \oint_{\partial S} f_1 \rd x + f_2 \rd y + f_3 \rd z\)

\(=\)







\(\ds \oint_{\partial S} \mathbf F \cdot \rd \mathbf r\)




















\(\ds \)

\(=\)







\(\ds \oint_{\partial R} \mathbf F \cdot \frac {\partial \mathbf r} {\partial s} \rd s + \mathbf F \cdot \frac {\partial \mathbf r} {\partial t} \rd t\)









so that if we define:

$\mathbf G = \paren {G_1, G_2} = \paren {\mathbf F \cdot \dfrac {\partial \mathbf r} {\partial s}, \mathbf F \cdot \dfrac {\partial \mathbf r} {\partial t} }$
then:

$\ds \int_{\partial S} \mathbf F \cdot \rd \mathbf r = \int_{\partial R} \mathbf G \cdot \rd \mathbf s$
where $\mathbf s$ is the position vector in the $s t$-plane. 
Note that:














\(\ds \frac {\partial G_2} {\partial s}\)

\(=\)







\(\ds \mathbf F \cdot \map {\frac \partial {\partial s} } {\frac {\partial \mathbf r} {\partial t} } + \frac {\partial \mathbf r} {\partial t} \cdot \frac {\partial \mathbf F} {\partial s}\)





Derivative of Dot Product of Vector-Valued Functions














\(\ds \frac {\partial G_1} {\partial t}\)

\(=\)







\(\ds \mathbf F \cdot \map {\frac \partial {\partial t} } {\frac {\partial \mathbf r} {\partial s} } + \frac {\partial \mathbf r} {\partial s} \cdot \frac {\partial \mathbf F} {\partial t}\)





Derivative of Dot Product of Vector-Valued Functions














\(\ds \frac {\partial G_2} {\partial s} - \frac {\partial G_1} {\partial t}\)

\(=\)







\(\ds \mathbf F \cdot \map {\frac \partial {\partial s} } {\frac {\partial \mathbf r} {\partial t} } + \frac {\partial \mathbf r} {\partial t} \cdot \frac {\partial \mathbf F} {\partial s}\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \mathbf F \cdot \map {\frac \partial {\partial t} } {\frac {\partial \mathbf r} {\partial s} } - \frac {\partial \mathbf r} {\partial s} \cdot \frac {\partial \mathbf F} {\partial t}\)




















\(\ds \)

\(=\)







\(\ds \frac {\partial \mathbf r} {\partial t} \cdot \frac {\partial \mathbf F} {\partial s} - \frac {\partial \mathbf r} {\partial s} \cdot \frac {\partial \mathbf F} {\partial t}\)





Symmetry of Second Derivatives




We turn now to the expression on the right hand side and write it in terms of $s$ and $t$:














\(\ds \)

\(\)







\(\ds \iint_S \paren {\nabla \times \mathbf F} \cdot \mathbf n \rd A\)




















\(\ds \)

\(=\)







\(\ds \iint_R \paren {\nabla \times \mathbf F \cdot \paren {\frac {\partial \mathbf r} {\partial s} \times \frac {\partial \mathbf r} {\partial t} } } \rd s \rd t\)









Let us investigate the integrand:














\(\ds \)

\(\)







\(\ds \nabla \times \mathbf F \cdot \paren {\frac {\partial \mathbf r} {\partial s} \times \frac {\partial \mathbf r} {\partial t} }\)




















\(\ds \)

\(=\)







\(\ds \paren {\paren {\dfrac {\partial f_3} {\partial y} - \dfrac {\partial f_2} {\partial z} } \mathbf i
          + \paren {\dfrac {\partial f_1} {\partial z} - \dfrac {\partial f_3} {\partial x} } \mathbf j
          + \paren {\dfrac {\partial f_2} {\partial x} - \dfrac {\partial f_1} {\partial y} } \mathbf k}\)





Definition of Curl Operator














\(\ds \)

\(\)





\(\, \ds \cdot \, \)

\(\ds \paren {\paren {\dfrac {\partial y} {\partial s} \dfrac {\partial z} {\partial t} - \dfrac {\partial z} {\partial s} \dfrac {\partial y} {\partial t} } \mathbf i + \paren {\dfrac {\partial z} {\partial s} \dfrac {\partial x} {\partial t} - \dfrac {\partial x} {\partial s} \dfrac {\partial z} {\partial t} } \mathbf j + \paren {\dfrac {\partial x} {\partial s} \dfrac {\partial y} {\partial t} - \dfrac {\partial y} {\partial s} \dfrac {\partial x} {\partial t} } \mathbf k}\)





Definition of Cross Product














\(\ds \)

\(=\)







\(\ds \paren {\dfrac {\partial f_3} {\partial y} - \dfrac {\partial f_2} {\partial z} } \paren {\dfrac {\partial y} {\partial s} \dfrac {\partial z} {\partial t} - \dfrac {\partial z} {\partial s} \dfrac {\partial y} {\partial t} }\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {\dfrac {\partial f_1} {\partial z} - \dfrac {\partial f_3} {\partial x} } \paren {\dfrac {\partial z} {\partial s} \dfrac {\partial x} {\partial t} - \dfrac {\partial x} {\partial s} \dfrac {\partial z} {\partial t} }\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {\dfrac {\partial f_2} {\partial x} - \dfrac {\partial f_1} {\partial y} } \paren {\dfrac {\partial x} {\partial s} \dfrac {\partial y} {\partial t} - \dfrac {\partial y} {\partial s} \dfrac {\partial x} {\partial t} }\)





Definition of Dot Product














\(\ds \)

\(=\)







\(\ds \dfrac {\partial f_3} {\partial y} \dfrac {\partial y} {\partial s} \dfrac {\partial z} {\partial t}
          - \dfrac {\partial f_3} {\partial y} \dfrac {\partial z} {\partial s} \dfrac {\partial y} {\partial t}
          - \dfrac {\partial f_2} {\partial z} \dfrac {\partial y} {\partial s} \dfrac {\partial z} {\partial t}
          + \dfrac {\partial f_2} {\partial z} \dfrac {\partial z} {\partial s} \dfrac {\partial y} {\partial t}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \dfrac {\partial f_1} {\partial z} \dfrac {\partial z} {\partial s} \dfrac {\partial x} {\partial t}
          - \dfrac {\partial f_1} {\partial z} \dfrac {\partial x} {\partial s} \dfrac {\partial z} {\partial t}
          - \dfrac {\partial f_3} {\partial x} \dfrac {\partial z} {\partial s} \dfrac {\partial x} {\partial t}
          + \dfrac {\partial f_3} {\partial x} \dfrac {\partial x} {\partial s} \dfrac {\partial z} {\partial t}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \dfrac {\partial f_2} {\partial x} \dfrac {\partial x} {\partial s} \dfrac {\partial y} {\partial t}
          - \dfrac {\partial f_2} {\partial x} \dfrac {\partial y} {\partial s} \dfrac {\partial x} {\partial t}
          - \dfrac {\partial f_1} {\partial y} \dfrac {\partial x} {\partial s} \dfrac {\partial y} {\partial t}
          + \dfrac {\partial f_1} {\partial y} \dfrac {\partial y} {\partial s} \dfrac {\partial x} {\partial t}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\partial f_1} {\partial z} \dfrac {\partial z} {\partial s} \dfrac {\partial x} {\partial t}
          - \dfrac {\partial f_1} {\partial z} \dfrac {\partial x} {\partial s} \dfrac {\partial z} {\partial t}
          - \dfrac {\partial f_1} {\partial y} \dfrac {\partial x} {\partial s} \dfrac {\partial y} {\partial t}
          + \dfrac {\partial f_1} {\partial y} \dfrac {\partial y} {\partial s} \dfrac {\partial x} {\partial t}\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \dfrac {\partial f_2} {\partial z} \dfrac {\partial y} {\partial s} \dfrac {\partial z} {\partial t}
          + \dfrac {\partial f_2} {\partial z} \dfrac {\partial z} {\partial s} \dfrac {\partial y} {\partial t}
          + \dfrac {\partial f_2} {\partial x} \dfrac {\partial x} {\partial s} \dfrac {\partial y} {\partial t}
          - \dfrac {\partial f_2} {\partial x} \dfrac {\partial y} {\partial s} \dfrac {\partial x} {\partial t}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \dfrac {\partial f_3} {\partial y} \dfrac {\partial y} {\partial s} \dfrac {\partial z} {\partial t}
          - \dfrac {\partial f_3} {\partial y} \dfrac {\partial z} {\partial s} \dfrac {\partial y} {\partial t}
          - \dfrac {\partial f_3} {\partial x} \dfrac {\partial z} {\partial s} \dfrac {\partial x} {\partial t}
          + \dfrac {\partial f_3} {\partial x} \dfrac {\partial x} {\partial s} \dfrac {\partial z} {\partial t}\)





grouping the terms that reference like components of $\mathbf F$ together














\(\ds \)

\(=\)







\(\ds \dfrac {\partial f_1} {\partial z} \dfrac {\partial z} {\partial s} \dfrac{\partial x}{\partial t}
          - \dfrac {\partial f_1} {\partial z} \dfrac {\partial x} {\partial s} \dfrac{\partial z}{\partial t}
          - \dfrac {\partial f_1} {\partial y} \dfrac {\partial x} {\partial s} \dfrac{\partial y}{\partial t}
          + \dfrac {\partial f_1} {\partial y} \dfrac {\partial y} {\partial s} \dfrac{\partial x}{\partial t}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {\dfrac {\partial f_1} {\partial x} \dfrac {\partial x} {\partial s} \dfrac {\partial x} {\partial t}
                  - \dfrac {\partial f_1} {\partial x} \dfrac {\partial x} {\partial s} \dfrac {\partial x} {\partial t} }\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \dfrac {\partial f_2} {\partial z} \dfrac {\partial y} {\partial s} \dfrac {\partial z} {\partial t}
          + \dfrac {\partial f_2} {\partial z} \dfrac {\partial z} {\partial s} \dfrac {\partial y} {\partial t}
          + \dfrac {\partial f_2} {\partial x} \dfrac {\partial x} {\partial s} \dfrac {\partial y} {\partial t}
          - \dfrac {\partial f_2} {\partial x} \dfrac {\partial y} {\partial s} \dfrac {\partial x} {\partial t}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {\dfrac {\partial f_2} {\partial y} \dfrac {\partial y} {\partial s} \dfrac {\partial y} {\partial t}
                  - \dfrac {\partial f_2} {\partial y} \dfrac {\partial y} {\partial s} \dfrac {\partial y} {\partial t} }\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \dfrac {\partial f_3} {\partial y} \dfrac {\partial y} {\partial s} \dfrac {\partial z} {\partial t}
          - \dfrac {\partial f_3} {\partial y} \dfrac {\partial z} {\partial s} \dfrac {\partial y} {\partial t}
          - \dfrac {\partial f_3} {\partial x} \dfrac {\partial z} {\partial s} \dfrac {\partial x} {\partial t}
          + \dfrac {\partial f_3} {\partial x} \dfrac {\partial x} {\partial s} \dfrac {\partial z} {\partial t}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {\dfrac {\partial f_3} {\partial z} \dfrac {\partial z} {\partial s} \dfrac {\partial z} {\partial t}
                  - \dfrac {\partial f_3} {\partial z} \dfrac {\partial z} {\partial s} \dfrac {\partial z} {\partial t} }\)





introducing terms that themselves sum to zero, in order to complete the parts of the derivatives of $\mathbf F$ in a later step














\(\ds \)

\(=\)







\(\ds \dfrac {\partial f_1} {\partial z} \dfrac {\partial z} {\partial s} \dfrac {\partial x} {\partial t}
          + \dfrac {\partial f_1} {\partial y} \dfrac {\partial y} {\partial s} \dfrac {\partial x} {\partial t}
          + \dfrac {\partial f_1} {\partial x} \dfrac {\partial x} {\partial s} \dfrac {\partial x} {\partial t}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {- \dfrac {\partial f_1} {\partial z} \dfrac {\partial x} {\partial s} \dfrac {\partial z} {\partial t}
                    - \dfrac {\partial f_1} {\partial y} \dfrac {\partial x} {\partial s} \dfrac {\partial y} {\partial t}
                    - \dfrac {\partial f_1} {\partial x} \dfrac {\partial x} {\partial s} \dfrac {\partial x} {\partial t} }\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \dfrac {\partial f_2} {\partial z} \dfrac {\partial z} {\partial s} \dfrac {\partial y} {\partial t}
          + \dfrac {\partial f_2} {\partial x} \dfrac {\partial x} {\partial s} \dfrac {\partial y} {\partial t}
          + \dfrac {\partial f_2} {\partial y} \dfrac {\partial y} {\partial s} \dfrac {\partial y} {\partial t}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {- \dfrac {\partial f_2} {\partial z} \dfrac {\partial y} {\partial s} \dfrac {\partial z} {\partial t}
                    - \dfrac {\partial f_2} {\partial x} \dfrac {\partial y} {\partial s} \dfrac {\partial x} {\partial t}
                    - \dfrac {\partial f_2} {\partial y} \dfrac {\partial y} {\partial s} \dfrac {\partial y} {\partial t} }\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \dfrac {\partial f_3} {\partial y} \dfrac {\partial y} {\partial s} \dfrac {\partial z} {\partial t}
          + \dfrac {\partial f_3} {\partial x} \dfrac {\partial x} {\partial s} \dfrac {\partial z} {\partial t}
          + \dfrac {\partial f_3} {\partial z} \dfrac {\partial z} {\partial s} \dfrac {\partial z} {\partial t}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {- \dfrac {\partial f_3} {\partial y} \dfrac {\partial z} {\partial s} \dfrac {\partial y} {\partial t}
                    - \dfrac {\partial f_3} {\partial x} \dfrac {\partial z} {\partial s} \dfrac {\partial x} {\partial t}
                    - \dfrac {\partial f_3} {\partial z} \dfrac {\partial z} {\partial s} \dfrac {\partial z} {\partial t} }\)





grouping terms by sign, but keeping terms that reference like components of $\mathbf F$ together














\(\ds \)

\(=\)







\(\ds \dfrac {\partial f_1} {\partial z} \dfrac {\partial z} {\partial s} \dfrac {\partial x} {\partial t}
          + \dfrac {\partial f_1} {\partial y} \dfrac {\partial y} {\partial s} \dfrac {\partial x} {\partial t}
          + \dfrac {\partial f_1} {\partial x} \dfrac {\partial x} {\partial s} \dfrac {\partial x} {\partial t}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \dfrac {\partial f_2} {\partial z} \dfrac {\partial z} {\partial s} \dfrac {\partial y} {\partial t}
          + \dfrac {\partial f_2} {\partial x} \dfrac {\partial x} {\partial s} \dfrac {\partial y} {\partial t}
          + \dfrac {\partial f_2} {\partial y} \dfrac {\partial y} {\partial s} \dfrac {\partial y} {\partial t}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \dfrac {\partial f_3} {\partial y} \dfrac {\partial y} {\partial s} \dfrac {\partial z} {\partial t}
          + \dfrac {\partial f_3} {\partial x} \dfrac {\partial x} {\partial s} \dfrac {\partial z} {\partial t}
          + \dfrac {\partial f_3} {\partial z} \dfrac {\partial z} {\partial s} \dfrac {\partial z} {\partial t}\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \leftparen {\dfrac {\partial f_1} {\partial z} \dfrac {\partial x} {\partial s} \dfrac {\partial z} {\partial t}
          + \dfrac {\partial f_1} {\partial y} \dfrac {\partial x} {\partial s} \dfrac {\partial y} {\partial t}
          + \dfrac {\partial f_1} {\partial x} \dfrac {\partial x} {\partial s} \dfrac {\partial x} {\partial t} }\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \dfrac {\partial f_2} {\partial z} \dfrac {\partial y} {\partial s} \dfrac {\partial z} {\partial t}
          + \dfrac {\partial f_2} {\partial x} \dfrac {\partial y} {\partial s} \dfrac {\partial x} {\partial t}
          + \dfrac {\partial f_2} {\partial y} \dfrac {\partial y} {\partial s} \dfrac {\partial y} {\partial t}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \rightparen {\dfrac {\partial f_3} {\partial y} \dfrac {\partial z} {\partial s} \dfrac {\partial y} {\partial t}
          + \dfrac {\partial f_3} {\partial x} \dfrac {\partial z} {\partial s} \dfrac {\partial x} {\partial t}
          + \dfrac {\partial f_3} {\partial z} \dfrac {\partial z} {\partial s} \dfrac {\partial z} {\partial t} }\)





grouping all negative terms together and factoring out the negative sign














\(\ds \)

\(=\)







\(\ds \dfrac {\partial f_1} {\partial x} \dfrac {\partial x} {\partial s} \dfrac {\partial x} {\partial t}
          + \dfrac {\partial f_1} {\partial y} \dfrac {\partial y} {\partial s} \dfrac {\partial x} {\partial t}
          + \dfrac {\partial f_1} {\partial z} \dfrac {\partial z} {\partial s} \dfrac {\partial x} {\partial t}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \dfrac {\partial f_2} {\partial x} \dfrac {\partial x} {\partial s} \dfrac {\partial y} {\partial t}
          + \dfrac {\partial f_2} {\partial y} \dfrac {\partial y} {\partial s} \dfrac {\partial y} {\partial t}
          + \dfrac {\partial f_2} {\partial z} \dfrac {\partial z} {\partial s} \dfrac {\partial y} {\partial t}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \dfrac {\partial f_3} {\partial x} \dfrac {\partial x} {\partial s} \dfrac {\partial z} {\partial t}
          + \dfrac {\partial f_3} {\partial y} \dfrac {\partial y} {\partial s} \dfrac {\partial z} {\partial t}
          + \dfrac {\partial f_3} {\partial z} \dfrac {\partial z} {\partial s} \dfrac {\partial z} {\partial t}\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \leftparen {\dfrac {\partial f_1} {\partial x} \dfrac {\partial x} {\partial s} \dfrac {\partial x} {\partial t}
          + \dfrac {\partial f_1} {\partial y} \dfrac {\partial x} {\partial s} \dfrac {\partial y} {\partial t}
          + \dfrac {\partial f_1} {\partial z} \dfrac {\partial x} {\partial s} \dfrac {\partial z} {\partial t} }\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \dfrac {\partial f_2} {\partial x} \dfrac {\partial y} {\partial s} \dfrac {\partial x} {\partial t}
          + \dfrac {\partial f_2} {\partial y} \dfrac {\partial y} {\partial s} \dfrac {\partial y} {\partial t}
          + \dfrac {\partial f_2} {\partial z} \dfrac {\partial y} {\partial s} \dfrac {\partial z} {\partial t}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \rightparen {\dfrac {\partial f_3} {\partial x} \dfrac {\partial z} {\partial s} \dfrac {\partial x} {\partial t}
          + \dfrac {\partial f_3} {\partial y} \dfrac {\partial z} {\partial s} \dfrac {\partial y} {\partial t}
          + \dfrac {\partial f_3} {\partial z} \dfrac {\partial z} {\partial s} \dfrac {\partial z} {\partial t} }\)





rearranging into groups, in order to clarify use of the Chain Rule for Real-Valued Functions in the next step














\(\ds \)

\(=\)







\(\ds \paren {\dfrac {\partial f_1} {\partial s} \dfrac {\partial x} {\partial t}
                  + \dfrac {\partial f_2} {\partial s} \dfrac {\partial y} {\partial t}
                  + \dfrac {\partial f_3} {\partial s} \dfrac {\partial z} {\partial t} }\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \paren {\dfrac {\partial f_1} {\partial t} \dfrac {\partial x} {\partial t}
                  + \dfrac {\partial f_2} {\partial t} \dfrac {\partial y} {\partial t}
                  + \dfrac {\partial f_3} {\partial t} \dfrac {\partial z} {\partial t} }\)





Chain Rule for Real-Valued Functions














\(\ds \)

\(=\)







\(\ds \dfrac {\partial \mathbf F} {\partial s} \cdot \dfrac {\partial \mathbf r} {\partial t}
          - \dfrac {\partial \mathbf F} {\partial t} \cdot \dfrac {\partial \mathbf r} {\partial s}\)





Definition of Dot Product














\(\ds \)

\(=\)







\(\ds \frac {\partial G_2} {\partial s} - \frac {\partial G_1} {\partial t}\)









That is:

$\ds \iint_S \paren {\nabla \times \mathbf F} \cdot \mathbf n \rd A = \iint_R \paren {\frac {\partial G_2} {\partial s} - \frac {\partial G_1} {\partial t} } \rd s \rd t$

By Green's Theorem, this can be written as:

$\ds \int_{\partial R} \mathbf G \cdot \rd \mathbf s$
Hence both sides of the theorem equation are equal.
$\blacksquare$


Also known as
The Kelvin-Stokes Theorem is also known as the Classical Stokes' Theorem.
It is also known as just Stokes's Theorem, or Stokes' Theorem.


Source of Name
This entry was named for Lord Kelvin and George Gabriel Stokes.


Historical Note
The Kelvin-Stokes Theorem was published by George Gabriel Stokes in $1854$.


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 22$: Integrals involving Vectors: $22.60$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Stokes's theorem (G.G. Stokes, 1854)
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Stokes's theorem (G.G. Stokes, 1854)
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Stokes's Theorem




