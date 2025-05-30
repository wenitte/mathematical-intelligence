# 

Source: https://proofwiki.org/wiki/Hausdorff_Paradox/Proof_1



Theorem
There exists a disjoint decomposition of the sphere $\mathbb S^2$ into four sets $A, B, C, Q$ such that $A, B, C, B \cup C$ are all congruent and $Q$ is countable.


Proof
Let $R \subset \map {\mathbb {SO} } 3$ be the group generated by the $\pi$ and $\dfrac {2 \pi} 3$ rotations around different axes.
The elements:

$\psi = \begin {pmatrix} -\tfrac 1 2 & \tfrac {\sqrt 3} 2 & 0 \\ -\tfrac {\sqrt 3} 2 & -\tfrac 1 2 & 0 \\ 0 & 0 & 1 \\ \end {pmatrix}$
$\phi = \begin {pmatrix} -\map \cos \vartheta & 0 & \map \sin \vartheta \\ 0 & -1 & 0 \\ \map \sin \vartheta & 0 & \map \cos \vartheta \\ \end {pmatrix}$
form a basis for $R$ for some $\vartheta$.
We have:

$\psi^3 = \phi^2 = \mathbf I_3$
where $\mathbf I_3$ is the identity mapping in $\mathbb R^3$.
Therefore $\forall r \in R: r \ne \mathbf I_3, \psi, \phi, \psi^2$ there exists some $n \in \N$ and some set of numbers $m_k \in \set {1, 2}, 1 \le k \le n$ such that $r$ can written as one of the following:

$\text{(a)}: \quad \ds r = \prod_{k \mathop = 1}^n \phi \psi^{m_k}$
$\text{(b)}: \quad \ds r = \map {\psi^{m_1} } {\prod_{k \mathop = 2}^n \phi \psi^{m_k} }\phi$
$\text{(c)}: \quad \ds r = \paren {\prod_{k \mathop = 1}^n \phi \psi^{m_k} } \phi$
$\text{(d)}: \quad \ds r = \map {\psi^{m_1} } {\prod_{k \mathop = 2}^n \phi \psi^{m_k} }$

Now we fix $\vartheta$ such that $\mathbf I_3$ cannot be written in any of the ways $\text{(a)}$, $\text{(b)}$, $\text{(c)}$, $\text{(d)}$. 
The action of $R$ on $\mathbb S^2$ will leave two points unchanged for each element of $R$ (the intersection of the axis of rotation and the sphere, to be exact). 
Since $R$ is finitely generated, it is a countable group.
Therefore the set of points of $\mathbb S^2$ which are unchanged by at least one element of $R$ is also countable. 
We call this set $Q \subset \mathbb S^2$, so that $R$ acts freely on $\mathbb S^2 \setminus Q$.
By Set of Orbits forms Partition, this partitions $\mathbb S^2 \setminus Q$ into orbits.
By the Axiom of Choice, there is a set $X$ containing one element of each orbit. 
For any $r \in R$, let $X_r$ be the right action of $r$ on $X$.
We have:

$\ds \mathbb S^2 \setminus Q = \bigcup_{r \mathop \in R} X_r$
Define the sets $A, B, C$ to be the smallest sets satisfying 

$X \subseteq A$
If $X_r \subset A, B, C$, then $X_{r\phi} \subset B, A, A$, respectively.
If $X_r \subset A, B, C$, then $X_{r\psi} \subset B, C, A$, respectively.
If $X_r \subset A, B, C$, then $X_{r\psi^2} \subset C, A, B$, respectively.
These sets are defined due to the uniqueness of the properties $\text{(a)}$ to $\text{(d)}$
Also, $A, B, C, B \cup C$ are congruent since they are rotations of each other, namely:

$A_\psi = B, B_{\psi^2} = C, A_\phi = B \cup C$
Hence we have constructed the sets $A, B, C, Q$ of the theorem.
$\blacksquare$


Axiom of Choice
This theorem depends on the Axiom of Choice.
Because of some of its bewilderingly paradoxical implications, the Axiom of Choice is considered in some mathematical circles to be controversial.
Most mathematicians are convinced of its truth and insist that it should nowadays be generally accepted.
However, others consider its implications so counter-intuitive and nonsensical that they adopt the philosophical position that it cannot be true.


Source of Name
This entry was named for Felix Hausdorff.





