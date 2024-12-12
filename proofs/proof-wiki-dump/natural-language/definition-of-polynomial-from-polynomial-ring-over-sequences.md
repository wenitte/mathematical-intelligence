# 

Source: https://proofwiki.org/wiki/Definition_of_Polynomial_from_Polynomial_Ring_over_Sequences


It has been suggested that this page or section be merged into Equivalence of Definitions of Polynomial Ring.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.
Theorem
Let $\struct {R, +, \circ}$ be a ring with unity.

Let $\struct {P \sqbrk R, \oplus, \odot}$ be the polynomial ring over the set of all sequences in $R$:

$P \sqbrk R = \set {\sequence {r_0, r_1, r_2, \ldots} }$
where the operations $\oplus$ and $\odot$ on $P \sqbrk R$ be defined as:




\((1)\)  

$:$  



Ring Addition:   





   \(\ds \sequence {r_0, r_1, r_2, \ldots} \oplus \sequence {s_0, s_1, s_2, \ldots} \)

  \(\ds = \)  

\(\ds  \sequence {r_0 + s_0, r_1 + s_1, r_2 + s_2, \ldots} \)   

  


\((2)\)  

$:$  



Ring Negative:   





   \(\ds -\sequence {r_0, r_1, r_2, \ldots} \)

  \(\ds = \)  

\(\ds  \sequence {-r_0, -r_1, -r_2, \ldots} \)   

  


\((3)\)  

$:$  



Ring Product:   





   \(\ds \sequence {r_0, r_1, r_2, \ldots} \odot \sequence {s_0, s_1, s_2, \ldots} \)

  \(\ds = \)  

\(\ds  \sequence {t_0, t_1, t_2, \ldots} \)   

  where $\ds t_i = \sum_{j \mathop + k \mathop = i} r_j \circ s_k$


Let $\struct {R \sqbrk X, +, \circ}$ be the ring of polynomials over $R$ in $X$.


This article, or a section of it, needs explaining.In particular: Strictly speaking the definition in terms of Definition:Polynomial Form is needed here, with $X$ specifically being an Definition:Indeterminate (Polynomial Theory) or Definition:Transcendental over Integral Domain.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

Then $\struct {R \sqbrk X, +, \circ}$ and $\struct {P \sqbrk R, \oplus, \odot}$ are isomorphic.


Proof
Let $P \sqbrk R$ be the polynomial ring over $R$.
Consider the injection $\phi: R \to P \sqbrk R$ defined as:

$\forall r \in R: \map \phi r = \sequence {r, 0, 0, \ldots}$
It is easily checked that $\phi$ is a ring monomorphism.
So the set $\set {\sequence {r, 0, 0, \ldots}: r \in R}$ is a subring of $P \sqbrk R$ which is isomorphic to $R$.

So we identify $r \in R$ with the sequence $\sequence {r, 0, 0, \ldots}$.
Next we note that $P \sqbrk R$ contains the element $\sequence {0, 1, 0, \ldots}$ which we can call $x$.
From the definition of ring product on the polynomial ring over $R$, we have that:

$x^2 = \sequence {0, 1, 0, \ldots} \odot \sequence {0, 1, 0, \ldots} = \sequence {0, 0, 1, 0, 0, \ldots}$
$x^3 = \sequence {0, 0, 1, 0, 0, \ldots} \odot \sequence {0, 1, 0, \ldots} = \sequence {0, 0, 0, 1, 0, \ldots}$
and in general:

$x^n = \sequence {0, 1, 0, \ldots}^{n - 1} \odot \sequence {0, 1, 0, \ldots} = \sequence {0, \ldots \paren n \ldots, 0, 1, 0, \ldots}$
for all $n \ge 1$.
Hence we see that:














\(\ds \sequence {r_0, r_1, \ldots, r_n, 0, \ldots \ldots}\)

\(=\)







\(\ds \sequence {r_0, 0, 0, \ldots \ldots} \odot \sequence {1, 0, 0, \ldots}\)




















\(\ds \)

\(\)





\(\, \ds \oplus \, \)

\(\ds \sequence {r_1, 0, 0, \ldots \ldots} \odot \sequence {0, 1, 0, \ldots}\)




















\(\ds \)

\(\)





\(\, \ds \oplus \, \)

\(\ds \cdots\)




















\(\ds \)

\(\)





\(\, \ds \oplus \, \)

\(\ds \sequence {r_n, 0, 0, \ldots \ldots} \odot \sequence {0, \ldots \paren n \ldots, 0, 1, 0, \ldots}\)




















\(\ds \)

\(=\)







\(\ds r_0 \oplus r_1 \circ x \oplus r_2 \circ x^2 \oplus \ldots \oplus r_n \circ x^n\)









So by construction, $R \sqbrk X$ is seen to be equivalent to $P \sqbrk R$.
$\blacksquare$


This article contains statements that are justified by handwavery.In particular: The entirety of the above argument needs to be made properly rigorous.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
It can also be shown that this proof works for the general ring whether it be a ring with unity or not.


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $6$: Polynomials and Euclidean Rings: $\S 25$. Polynomials




