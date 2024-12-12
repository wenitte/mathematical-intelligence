# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Connected_Set



Theorem
The following definitions of the concept of Connected Set in the context of Topology are equivalent:

Definition 1
$H$ is a connected set of $T$ if and only if it is not the union of any two non-empty separated sets of $T$.

Definition 2
$H$ is a connected set of $T$ if and only if it is not disconnected in $T$.

Definition 3
$H$ is a connected set of $T$ if and only if:

the topological subspace $\struct {H, \tau_H}$ of $T$ is a connected topological space.
Definition 4
$H$ is a connected set of $T$ if and only if:

there do not exist disjoint, non-empty subsets $X$ and $Y$ of $H$ such that $X \cup Y = H$ such that:
no limit point of $X$ is an element of $Y$
no limit point of $Y$ is an element of $X$.
Definition 5
$H$ is a connected set of $T$ if and only if:

$H$ cannot be partitioned into $2$ non-empty subsets so that each subset has no element in common with the closure of the other.


Proof
In order to prove equivalence, it is to be shown that if a subset of a topological space is not connected by one of the given definitions above, then it will likewise not be connected by one of the other definitions.
Equivalence of definitions for connected set will then follow by the Rule of Transposition.


Definition 1 implies Definition 2
Suppose that $H$ is not connected by Definition 1.
Then:

$H = A \cup B$
where $A$ and $B$ are non-empty separated sets of $T$.
By Separated Sets are Clopen in Union, $A$ and $B$ are open in $H$, considered with the subspace topology $\tau_H$.
Thus there exist open sets $U$ and $V$ in $S$ such that:

$A = U \cap H$
and:

$B = V \cap H$
Thus $U \cap H \ne \O$ and $V \cap H \ne \O$ such that:














\(\ds H\)

\(=\)







\(\ds A \cup B\)




















\(\ds \)

\(=\)







\(\ds \paren {U \cap H} \cup \paren {V \cap H}\)




















\(\ds \)

\(=\)







\(\ds \paren {U \cup V} \cap H\)




















\(\ds \)

\(\subseteq\)







\(\ds U \cup V\)










It remains to be shown that:

$U \cap V \cap H = \O$

Thus:














\(\ds U \cap V \cap H\)

\(=\)







\(\ds \paren {U \cap H} \cap \paren {V \cap H}\)




















\(\ds \)

\(=\)







\(\ds A \cap B\)




















\(\ds \)

\(=\)







\(\ds \O\)










So $H$ is not connected by Definition 2.
$\Box$


Definition 2 implies Definition 1
Suppose that $H$ is not connected by Definition 2.
Then there exist open sets $U$ and $V$ in $S$ such that:

$U \cap H \ne \O$
$V \cap H \ne \O$
$H \subseteq U \cup V$
$U \cap V \cap H = \O$
Let $A = U \cap H$ and let $B = V \cap H$.
Then by hypothesis:

$A \ne \O$
and:

$B \ne \O$
Since $H \subseteq U \cup V$, it follows that:

$H = H \cap \paren {U \cup V} = \paren {H \cap U} \cup \paren {H \cap V} = A \cup B$

It remains to be shown that $A$ and $B$ are separated sets of $T$.
Since $H = A \cup B$ and $U \cap V \cap H = \O$, it follows that:

$A = H \setminus B$
Since $V$ is open in $\struct {S, \tau}$ it follows that $B$ is open in $\struct {H, \tau_H}$, where $\tau_H$ is the subspace topology.
Thus by definition $A$ is closed in $\struct {H, \tau_H}$.
By Closed Set equals its Closure:

$A = A^- \cap H$
We have that $B \subseteq H$.
Therefore:














\(\ds A^- \cap B\)

\(\subseteq\)







\(\ds A^- \cap B \cap H\)




















\(\ds \)

\(=\)







\(\ds A \cap B\)




















\(\ds \)

\(=\)







\(\ds \paren ({U \cap H} \cap \paren {V \cap H}\)




















\(\ds \)

\(=\)







\(\ds U \cap V \cap H\)




















\(\ds \)

\(=\)







\(\ds \O\)









A similar argument shows that $A \cap B^- = \O$.
Thus, by definition, $A$ and $B$ are separated sets of $T$.

That is, $H$ is not connected by Definition 1.
$\Box$


Definition 2 implies Definition 3
Suppose that $H$ is not connected by Definition 2.
Then there exist open sets $U$ and $V$ in $S$ such that:

$U \cap H \ne \O$
$V \cap H \ne \O$
$H \subseteq U \cup V$
$U \cap V \cap H = \O$

Let $U' = U \cap H$ and $V' = V \cap H$.
By assumption, $U'$ and $V'$ are non-empty.
By the definition of the subspace topology, $U'$ and $V'$ are open in $\struct {H, \tau_H}$.

Since $H \subseteq U \cup V$, it follows that:














\(\ds H\)

\(=\)







\(\ds H \cap \paren {U \cup V}\)




















\(\ds \)

\(=\)







\(\ds A \cap B\)




















\(\ds \)

\(=\)







\(\ds \paren {H \cap U} \cup \paren {H \cap V}\)




















\(\ds \)

\(=\)







\(\ds U' \cup V'\)










Thus $U'$ and $V'$ form a separation of $H$.
Thus $H$ is not a connected topological space.
That is, $H$ is not connected by Definition 3.
$\Box$


Definition 3 implies Definition 2
Let $\tau_H$ be the subspace topology induced on $H$ by $\tau$.
Suppose that $H$ is not connected by Definition 3.
Thus, by definition of connected topological space, $\struct {H, \tau_H}$ admits a separation.
That is, there exist non-empty disjoint open sets $U'$ and $V'$ of $\struct {H, \tau_H}$ such that:

$H = U' \cup V'$.
By the definition of the subspace topology, there exist open sets $U$ and $V$ of $\struct {S, \tau}$ such that:

$U' = U \cap H$
and:

$V' = V \cap H$
Then:














\(\ds U \cap V \cap H\)

\(=\)







\(\ds \paren {U \cap H} \cap \paren {V \cap H}\)




















\(\ds \)

\(=\)







\(\ds U' \cap V'\)




















\(\ds \)

\(=\)







\(\ds \O\)










Since $U'$ and $V'$ are non-empty:

$U' = U \cap H$
$V' = V \cap H$
$U \cap H \ne \O$
$V \cap H \ne \O$
Then because:

$H = U' \cup V'$
$U' \subseteq U$
$V' \subseteq V$
it follows that:

$H \subseteq U \cup V$
Thus we have:

$U \cap H \ne \O$
$V \cap H \ne \O$
$H \subseteq U \cup V$
$U \cap V \cap H = \O$
That is, $H$ is not connected by Definition 2.
$\Box$


This article is complete as far as it goes, but it could do with expansion.In particular: Definitions 4 and 5 need to be addedYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding this information.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Expand}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Hence it follows that all the definitions of connected set are equivalent.
$\blacksquare$


Also see
Results about connected sets can be found here.


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $4$: Connectedness




