# 

Source: https://proofwiki.org/wiki/Basis_Element_of_Furstenberg_Topology_is_Clopen

Theorem
Let $\tau$ be the Furstenberg topology on the set of integers $\Z$.
Let $a, b \in \Z$ such that $a \ne 0$.

Then $a \Z + b$ is clopen in $\struct {\Z, \tau}$.


Proof
$a \Z + b \in \tau$ by Definition of Furstenberg Topology.

It remains to show:

$\Z \setminus \paren {a \Z + b} \in \tau$
As $a \Z = \paren {-a} \Z$, we may assume $a > 0$.
If $a = 1$, then $\Z \setminus \Z = \O \in \tau$.
Thus we assume that $a \ge 2$.
Then:














\(\ds x\)

\(\in\)







\(\ds \Z \setminus \paren {a \Z + b}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds x - b\)

\(\not \in\)







\(\ds a \Z\)














\(\ds \leadstoandfrom \ \ \)





\(\ds x - b\)

\(\not \equiv\)







\(\ds 0\)

\(\ds \pmod a\)












\(\ds \leadstoandfrom \ \ \)

\(\ds \forall k \in \set {1, \ldots , a-1}: \, \)



\(\ds x - b\)

\(\equiv\)







\(\ds k\)

\(\ds \pmod a\)












\(\ds \leadstoandfrom \ \ \)

\(\ds \forall k \in \set {1, \ldots , a-1}: \, \)



\(\ds x - b\)

\(\in\)







\(\ds a \Z + k\)














\(\ds \leadstoandfrom \ \ \)





\(\ds x\)

\(\in\)







\(\ds \bigcup _{k \mathop \in \set {1, \ldots , a-1} } a \Z + k\)









That is:

$\ds \Z \setminus \paren {a \Z + b} = \bigcup _{k \mathop \in \set {1, \ldots , a-1} } a \Z + k$
where $a \Z + k \in \tau$ for all $k \in \set {1, \ldots , a-1}$.
Therefore $\Z \setminus \paren {a \Z + b} \in \tau$.
$\blacksquare$





