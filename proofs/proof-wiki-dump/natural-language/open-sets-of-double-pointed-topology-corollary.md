# 

Source: https://proofwiki.org/wiki/Open_Sets_of_Double_Pointed_Topology/Corollary

Theorem
Let $\struct {S, \tau_S}$ be a topological space.
Let $D$ be a doubleton endowed with the indiscrete topology.
Let $\struct {S \times D, \tau}$ be the double pointed topology on $S$.

A subset $X \subseteq S \times D$ is closed in $\tau$ if and only if for some closed set $C$ of $\tau$:

$X = C \times D$


Proof
By definition, $X$ is closed if and only if its complement $\map \complement X$ is open.
By Open Sets of Double Pointed Topology, it follows by that for some $U \in \tau$:

$\map \complement X = U \times D$
Then by Cartesian Product Distributes over Set Difference and Complement of Complement, we have that:


Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: rather, Cartesian Product Distributes over Complement (and for Relative Complement), but those don't existYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
$X = \paren {S \times D} \setminus \paren {U \times D} = \paren {S \setminus U} \times D$
Since $S \setminus U$ is a closed set of $\tau$, the result follows.
$\blacksquare$





