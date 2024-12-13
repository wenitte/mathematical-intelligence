# 

Source: https://proofwiki.org/wiki/Ring_Homomorphism_whose_Kernel_contains_Ideal


It has been suggested that this page or section be merged into Universal Property of Quotient Ring.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.
Theorem
Let $R$ be a ring.
Let $J$ be an ideal of $R$.
Let $\nu: R \to R / J$ be the quotient epimorphism.

Let $\phi: R \to S$ be a ring homomorphism such that:

$J \subseteq \map \ker \phi$
where $\map \ker \phi$ is the kernel of $\phi$.

Then there exists a unique ring homomorphism $\psi: R / J \to S$ such that:

$\phi = \psi \circ \nu$
where $\circ$ denotes composition of mappings.


$\begin {xy} \xymatrix@L + 2mu@ + 1em {
R \ar[rr]^*{\nu}
  \ar[rdrd]_*{\phi}

& & R / J \ar[dd]_*{\psi} \\
\\
& & S 
} \end {xy}$

Also:

$\map \ker \psi = \map \ker \phi / J$


Proof
Suppose $\phi = \psi \circ \nu$.
Let $J + x$ be an arbitrary element of $R / J$.
Then:

$(1) \quad \map \psi {J + x} = \psi \circ \map \nu x = \map \phi x$
So there is only one possible way to define $\psi$.
Now suppose $J + x = J + x'$.
Then $x + \paren {-x'} \in J$.
So $x + \paren {-x'} \in \map \ker \phi$ as $J \subseteq \map \ker \phi$.
That is, $\map \phi {x + \paren {-x'} } = 0_S$.
So $\map \phi x = \map \phi {x'}$ and so $\psi$ as defined in $(1)$ is well-defined.

Now suppose $J + x, J + y \in R / J$.
We have:














\(\ds \map \psi {\paren {J + x} + \paren {J + y} }\)

\(=\)







\(\ds \map \psi {J + \paren {x + y} }\)





Definition of Quotient Ring














\(\ds \)

\(=\)







\(\ds \map \phi {x + y}\)





Definition of $\psi$ in $(1)$ above














\(\ds \)

\(=\)







\(\ds \map \phi x + \map \phi y\)





Definition of Ring Homomorphism














\(\ds \)

\(=\)







\(\ds \map \psi {J + x} + \map \psi {J + y}\)









So $\psi$ preserves ring addition.

Then:














\(\ds \map \psi {\paren {J + x} \paren {J + y} }\)

\(=\)







\(\ds \map \psi {J + \paren {x y} }\)





Definition of Quotient Ring














\(\ds \)

\(=\)







\(\ds \map \phi {x y}\)





Definition of $\psi$ in $(1)$ above














\(\ds \)

\(=\)







\(\ds \map \phi x \map \phi y\)





Definition of Ring Homomorphism














\(\ds \)

\(=\)







\(\ds \map \psi {J + x} \map \psi {J + y}\)









So $\psi$ preserves ring product, and so $\psi$ is a ring homomorphism.

Finally:














\(\ds \map \psi {J + x}\)

\(=\)







\(\ds 0_S\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \map \phi x\)

\(=\)







\(\ds 0_S\)














\(\ds \leadstoandfrom \ \ \)





\(\ds x\)

\(\in\)







\(\ds \map \ker \phi\)









So:

$\map \ker \psi = \map \ker \phi / J$
$\blacksquare$


Sources
1970: B. Hartley and T.O. Hawkes: Rings, Modules and Linear Algebra ... (previous) ... (next): $\S 2.2$: Homomorphisms: Theorem $2.8$




