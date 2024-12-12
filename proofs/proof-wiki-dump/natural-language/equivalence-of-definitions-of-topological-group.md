# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Topological_Group



Theorem
Let $\struct {G, \odot}$ be a group.
On its underlying set $G$, let $\struct {G, \tau}$ be a topological space.
The following definitions of the concept of Topological Group are equivalent:

Definition 1
$\struct {G, \odot, \tau}$ is a topological group if and only if:




\((1)\)  

$:$  



Continuous Group Product   









$\odot: \struct {G, \tau} \times \struct {G, \tau} \to \struct {G, \tau}$ is a continuous mapping   

  


\((2)\)  

$:$  



Continuous Inversion Mapping   









$\iota: \struct {G, \tau} \to \struct {G, \tau}$ such that $\forall x \in G: \map \iota x = x^{-1}$ is also a continuous mapping   

  

where $\struct {G, \tau} \times \struct {G, \tau}$ is considered as $G \times G$ with the product topology.

Definition 2
Let the mapping $\psi: \struct {G, \tau} \times \struct {G, \tau} \to \struct {G, \tau}$ be defined as:

$\map \psi {x, y} = x \odot y^{-1}$

$\struct {G, \odot, \tau}$ is a topological group if and only if:

$\psi$ is a continuous mapping
where $\struct {G, \tau} \times \struct {G, \tau}$ is considered as $G \times G$ with the product topology.


Proof
Definition 1 implies Definition 2
Let $\struct {G, \odot, \tau}$ be a topological group by Definition 1.
Let $\phi: \struct {G, \tau} \to \struct {G, \tau}$ be the mapping defined as:

$\forall x \in G: \map \phi x = x^{-1}$

By definition:

$\odot: \struct {G, \tau} \times \struct {G, \tau} \to \struct {G, \tau}$ is a continuous mapping
$\phi: \struct {G, \tau} \to \struct {G, \tau}$ is a continuous mapping

Let $\phi': G \times G \to G \times G$ be defined by:

$\map {\phi'} {x, y} = \tuple {x, \map \phi y}$
Let $\phi_1: G \times G \to G$ be defined as:

$\map {\phi_1} {x, y} = x$
Let $\phi_2: G \times G \to G$ be defined as:

$\map {\phi_2} {x, y} = y^{-1}$
Then for arbitrary open set $V \subset G$, both sets

$\phi_1^{-1} \sqbrk V = V \times G$
and

$\phi_2^{-1} \sqbrk V = G \times \phi^{-1} \sqbrk V$
are open in $G \times G$, thus $\phi_1$ and $\phi_2$ are continuous.
Because:

$\map {\phi'} {x, y} = \tuple {\map {\phi_1} x, \map {\phi_2} y}$
by Continuous Mapping to Product Space, $\phi'$ is continuous.

Let the mapping $\psi: \struct {G, \tau} \times \struct {G, \tau} \to \struct {G, \tau}$ be defined as:

$\psi = \odot \circ \phi'$
where $\circ$ denotes composition of mappings.
By Composite of Continuous Mappings is Continuous, $\psi$ is continuous.

Then:














\(\ds \map \psi {x, y}\)

\(=\)







\(\ds \map {\paren {\odot \circ \phi'} } {x, y}\)





Definition of $\psi$














\(\ds \)

\(=\)







\(\ds \map \odot {\map {\phi'} {x, y} }\)





Definition of Composition of Mappings














\(\ds \)

\(=\)







\(\ds \map \odot {x, \map \phi y}\)





Definition of $\phi'$














\(\ds \)

\(=\)







\(\ds \map \odot {x, y^{-1} }\)





Definition of $\phi$














\(\ds \)

\(=\)







\(\ds x \odot y^{-1}\)





Definition of $\odot$



demonstrating that:

$\map \psi {x, y} = x \odot y^{-1}$
Thus $\struct {G, \odot, \tau}$ is a topological group by Definition 2.
$\Box$


Definition 2 implies Definition 1
Let $\struct {G, \odot, \tau}$ be a topological group by Definition 2.

Let $e$ be the identity of $G$.

Let the mapping $\psi: \struct {G, \tau} \times \struct {G, \tau} \to \struct {G, \tau}$ be defined as:

$\forall \tuple {x, y} \in G \times G: \map \psi {x, y} = x \odot y^{-1}$

By definition of $\struct {G, \odot, \tau}$, $\psi$ is continuous.
By Continuous Mapping to Product Space $\psi$ is continuous in each variable.
Let $\phi: \struct {G, \tau} \to \struct {G, \tau}$ be the mapping defined as:

$\forall x \in G: \map \phi x = x^{-1}$
Since $\map \phi x = \map \psi {e, x}$, it follows that $\phi$ is continuous.
Let $\phi': G \times G \to G \times G$ be defined by:

$\forall \tuple {x, y} \in G \times G: \map {\phi'} {x, y} = \tuple {x, \map \phi y}$
Then $\phi'$ is continuous.


This article, or a section of it, needs explaining.In particular: $\phi'$ is continuousYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
$\odot$ is the composition of $\psi$ with $\phi'$.
Thus by Composite of Continuous Mappings is Continuous, $\odot$ is continuous.
Thus $\struct {G, \odot, \tau}$ is a topological group by Definition 1.
$\blacksquare$





