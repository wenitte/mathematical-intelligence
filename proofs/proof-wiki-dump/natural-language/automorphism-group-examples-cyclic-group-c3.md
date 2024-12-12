# 

Source: https://proofwiki.org/wiki/Automorphism_Group/Examples/Cyclic_Group_C3



Example of Automorphism Group
Consider the cyclic group $C_3$, which can be presented as its Cayley table:

$\begin {array} {r|rrr} \struct {\Z_3, +_3} & \eqclass 0 3 & \eqclass 1 3 & \eqclass 2 3 \\ \hline \eqclass 0 3 & \eqclass 0 3 & \eqclass 1 3 & \eqclass 2 3 \\ \eqclass 1 3 & \eqclass 1 3 & \eqclass 2 3 & \eqclass 0 0 \\ \eqclass 2 3 & \eqclass 2 3 & \eqclass 0 3 & \eqclass 1 3 \\ \end {array}$

The automorphism group of $C_3$ is given by:

$\Aut {C_3} = \set {\phi, \theta}$
where $\phi$ and $\theta$ are defined as:














\(\ds \map \phi {\eqclass 0 3}\)

\(=\)







\(\ds \eqclass 0 3\)




















\(\ds \map \phi {\eqclass 1 3}\)

\(=\)







\(\ds \eqclass 1 3\)




















\(\ds \map \phi {\eqclass 2 3}\)

\(=\)







\(\ds \eqclass 2 3\)
























\(\ds \map \theta {\eqclass 0 3}\)

\(=\)







\(\ds \eqclass 0 3\)




















\(\ds \map \theta {\eqclass 1 3}\)

\(=\)







\(\ds \eqclass 2 3\)




















\(\ds \map \theta {\eqclass 2 3}\)

\(=\)







\(\ds \eqclass 1 3\)










The Cayley table of $\Aut {C_3}$ is then:

$\begin{array}{r|rr}
      & \phi   & \theta \\

\hline
\phi   & \phi   & \theta
\\
\theta & \theta & \phi
\\
\end{array}$


Proof 1
Let $\xi$ be a general automorphism on $C_3$.
Then by Group Homomorphism Preserves Identity we immediately have that:

$\map \xi {\eqclass 0 3} = \eqclass 0 3$

Investigating $\map \xi {\eqclass 1 3}$, we find $2$ options:

$\map \xi {\eqclass 1 3} = \eqclass 1 3$
$\map \xi {\eqclass 1 3} = \eqclass 2 3$

Each leads to one and only one bijection from $C_3$ to $C_3$, that is, $\phi$ and $\theta$ as defined.

It is determined by inspection that both $\phi$ and $\theta$ are automorphisms.
Hence Automorphism Group is Subgroup of Symmetric Group is applied to confirm that $\set {\phi, \theta}$ forms a group.
The Cayley table follows.
$\blacksquare$


Proof 2
This is an example of Order of Automorphism Group of Prime Group:

$\order {\Aut G} = p - 1$
for a group of prime order $p$.
The only group of order $2$ is the cyclic group of order $2$.
The result follows.
$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $8$: The Homomorphism Theorem: Exercise $5$




