# 

Source: https://proofwiki.org/wiki/Automorphism_Group/Examples/Cyclic_Group_C3/Proof_2

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


Proof
This is an example of Order of Automorphism Group of Prime Group:

$\order {\Aut G} = p - 1$
for a group of prime order $p$.
The only group of order $2$ is the cyclic group of order $2$.
The result follows.
$\blacksquare$





