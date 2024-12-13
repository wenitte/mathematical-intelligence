# 

Source: https://proofwiki.org/wiki/Semidirect_Product_of_Groups_is_Group


This article needs to be tidied.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.


Theorem
Let $H$ and $N$ be groups.
Let $\Aut N$ denote the automorphism group of $N$.
Let $\phi : H\to \Aut N$ be a group homomorphism, that is, let $H$ act on $N$.
Let $N \rtimes_\phi H$ be the semidirect product of $N$ and $H$ with respect to $\phi$, that is:

$N \rtimes_\phi H = (N \times H, \circ)$ where
$(n_1, h_1) \circ (n_2, h_2) = (n_1\cdot \phi(h_1)(n_2), h_1\cdot h_2)$

Then $N\rtimes_\phi H$ is a group.


Proof
Associativity
Let $(n_1,h_1),(n_2,h_2),(n_3,h_3)\in N\times H$. Then














\(\ds ((n_1, h_1) \circ (n_2, h_2)) \circ (n_3, h_3)\)

\(=\)







\(\ds ((n_1\cdot \phi_{h_1}(n_2), h_1\cdot h_2)) \circ (n_3,h_3)\)




















\(\ds \)

\(=\)







\(\ds (n_1\cdot \phi_{h_1}(n_2) \cdot \phi_{h_1h_2}(n_3), h_1\cdot h_2\cdot h_3)\)




















\(\ds \)

\(=\)







\(\ds (n_1\cdot \phi_{h_1}(n_2) \cdot \phi_{h_1}(\phi_{h_2}(n_3)), h_1\cdot h_2\cdot h_3)\)





Definition of Group Action














\(\ds \)

\(=\)







\(\ds (n_1\cdot \phi_{h_1}(n_2\phi_{h_2}(n_3)), h_1\cdot h_2\cdot h_3)\)





$H$ acts by automorphisms














\(\ds \)

\(=\)







\(\ds (n_1, h_1) \circ ((n_2, h_2) \circ (n_3, h_3))\)









$\Box$

Identity Element
Let $e = (e_N,e_H)$ and $(n,h)\in N\times H$.
Then 














\(\ds e \circ (n,h)\)

\(=\)







\(\ds (e_N\cdot \phi_{e_H}(n), e_H\cdot h)\)




















\(\ds \)

\(=\)







\(\ds (n, h)\)





Definition of Group Action



and














\(\ds (n,h) \circ e\)

\(=\)







\(\ds (n\cdot \phi_{h}(e_N), h\cdot e_H)\)




















\(\ds \)

\(=\)







\(\ds (n, h)\)





$\phi_h(e_N)=e_N$ because $H$ acts by automorphisms



Thus $e$ is an identity element for $\circ$.
$\Box$

Existence of inverse element
Let $(n,h)\in N\times H$.
We are looking for $(m,g)$ with $(n,h)\circ(m,g) = (e_N,e_H) = (m,g)\circ(n,h)$, that is:

$\begin{eqnarray}
  n \phi_h(m) &= e_N \\
  hg &= e_H \\
  m \phi_g(n) &= e_N \\
  gh &= e_H

\end{eqnarray}$
Thus we take $g=h^{-1}$.
From the first equation we have $m=\phi_h^{-1}(n^{-1})$; from the third $m=\phi_{h^{-1}}(n)^{-1}$.
These are equal because $H$ acts by automorphisms.
The inverse of $(n,h)$ is thus $(\phi_{h^{-1}}(n^{-1}),h^{-1})$.
$\Box$
$\blacksquare$





