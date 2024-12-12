# 

Source: https://proofwiki.org/wiki/Automorphism_Group/Examples/Cyclic_Group_C8

Example of Automorphism Group
The automorphism group of the cyclic group $C_8$ is the Klein $4$-group.


Proof
The cyclic group $C_8$ is isomorphic to the underlying group of the ring $\Z_8$.
So the elements of $C_8$ can be denoted by $\eqclass 0 8, \eqclass 1 8, \ldots, \eqclass 7 8$.
By Power of Generator of Cyclic Group is Generator iff Power is Coprime with Order, the generators of $C_8$ are exactly $\eqclass 1 8, \eqclass 3 8, \eqclass 5 8, \eqclass 7 8$.

By Automorphism Maps Generator to Generator and Homomorphism of Generated Group, there are exactly $4$ automorphisms for the group $C_8$, namely:

$\phi_1: \eqclass 1 8 \mapsto \eqclass 1 8$
$\phi_3: \eqclass 1 8 \mapsto \eqclass 3 8$
$\phi_5: \eqclass 1 8 \mapsto \eqclass 5 8$
$\phi_7: \eqclass 1 8 \mapsto \eqclass 7 8$

This article, or a section of it, needs explaining.In particular: Why are there just these $4$? See talkYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
By direct computation, the Cayley table for these $4$ elements can be presented as:

$\begin{array}{c|cccc}
 & \phi_1 & \phi_3 & \phi_5 & \phi_7 \\

\hline
\phi_1 & \phi_1 & \phi_3 & \phi_5 & \phi_7 \\
\phi_3 & \phi_3 & \phi_1 & \phi_7 & \phi_5 \\
\phi_5 & \phi_5 & \phi_7 & \phi_1 & \phi_3 \\
\phi_7 & \phi_7 & \phi_5 & \phi_3 & \phi_1 \\
\end{array}$
which is the same as the Cayley table of the Klein $4$-group.
This shows that the automorphism group of $C_8$ is isomorphic to the Klein $4$-group.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $8$: Homomorphisms, Normal Subgroups and Quotient Groups: Exercise $27 \ \text {(ii)}$




