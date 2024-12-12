# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Oscillation_of_Real_Function_at_Point



Theorem
Let $X$ and $Y$ be real sets.
Let $f: X \to Y$ be a real function.
Let $x \in X$.

The following definitions of the concept of Oscillation of Real Function at Point are equivalent:

Definition 1
Let $\NN_x$ be the set of neighborhoods of $x$.

The oscillation of $f$ at $x$ is defined as:

$\ds \map {\omega_f} x := \inf_{U \mathop \in \NN_x} \map {\omega_f} {U \cap X}$
where $\map {\omega_f} {U \cap X}$ denotes the oscillation of $f$ on $U \cap X$.

Definition 2
The oscillation of $f$ at $x$ is defined as:

$\ds \map {\omega_f} x := \inf \set {\map {\omega_f} {\openint {x - \epsilon} {x + \epsilon} \cap X}: \epsilon \in \R_{>0} }$
where $\map {\omega_f} {\openint {x - \epsilon} {x + \epsilon} \cap X}$ denotes the oscillation of $f$ on $\openint {x - \epsilon} {x + \epsilon} \cap X$.

Definition 3
The oscillation of $f$ at $x$ is defined as:

$\ds \map {\omega_f} x := \lim_{h \mathop \to 0^+} \map {\omega_f} {\openint {x - h} {x + h} \cap X}$
where $\map {\omega_f} {\openint {x - h} {x + h} \cap X}$ denotes the oscillation of $f$ on $\openint {x - h} {x + h} \cap X$.

In the definitions above, the oscillation of $f$ on a non-empty set $A \subseteq X$ is defined as:

$\ds \map {\omega_f} A := \sup_{y, z \mathop \in A} \size {\map f y - \map f z}$
where the supremum is taken in the extended real numbers $\overline \R$.


Proof
Definitions 1 and 2 are equivalent
We reformulate Definition 1 into Definition 1' by:

substituting the definition of $\map {\omega_f} {U \cap X}$ into the definition of $\map {\omega_f} x$
Definition 1':

$\ds \map {\omega_f} x := \inf_{U \mathop \in \NN_x} \paren {\sup_{y, z \mathop \in U \cap X} \size {\map f y - \map f z} }$

We reformulate Definition 2 into Definition 2' by:

substituting the definition of $\map {\omega_f} {\openint {x - \epsilon} {x + \epsilon} \cap X}$ into the definition of $\map {\omega_f} x$
changing set condition into sup tag
Definition 2':

$\ds \map {\omega_f} x := \inf_{\epsilon \mathop \in \R_{>0} } \paren {\sup_{y, z \mathop \in \openint {x - \epsilon} {x + \epsilon} \cap X} \size {\map f y - \map f z} }$

The theorem text of Oscillation at Point (Infimum) equals Oscillation at Point (Epsilon-Neighborhood) also contains two definitions of Oscillation at a Point for a real function $f$.
We call them definitions $a)$ and $b)$.
Definition $a)$:
Let $\NN_x$ be the set of neighborhoods of $x$.

$\map {\omega_f} x = \ds \inf \set {\map {\omega_f} {I \cap X}: I \in \NN_x}$
where:

$\map {\omega_f} {I \cap X} = \ds \sup \set {\size {\map f y - \map f z}: y, z \in I \cap X}$
Definition $b)$:

$\map {\omega^E_f} x = \inf \set {\map {\omega_f} {I \cap X}: I \in E_x}$
where:

$E_x$ is the set of $\epsilon$-neighborhoods of $x$

We reformulate Definition $a)$ into Definition $a')$ by:

substituting the definition of $\map {\omega_f} {I \cap X}$ into the definition of $\map {\omega_f} x$
changing set conditions into sup tags
renaming parameter set $I$ to $U$
Definition $a')$:

$\ds \map {\omega_f} x = \inf_{U \mathop \in \NN_x} \paren {\sup_{y, z \mathop \in U \cap X} \size {\map f y - \map f z} }$

We reformulate Definition $b)$ into Definition $b')$ by:

substituting the definition of $\map {\omega_f} {I \cap X}$ into the definition of $\map {\omega^E_f} x$
changing set conditions into sup tags
using $\epsilon$ as parameter instead of $I$
Definition $b')$:

$\ds \map {\omega^E_f} x = \inf_{\epsilon \mathop \in \R_{>0}} \paren {\sup_{y, z \mathop \in \openint {x - \epsilon} {x + \epsilon} \cap X} \size {\map f y - \map f z} }$

We observe that definitions $(1')$ and $a')$ are the same, so they are equivalent.
Therefore:

Definition 1 and $a)$ are equivalent
Also, definitions $(2')$ and $b')$ are the same, so they are equivalent.
Therefore:

Definition 2 and $b)$ are equivalent

We have:

Definition 1 and Definition $a)$ are equivalent
Definition $a)$ and Definition $b)$ are equivalent by Oscillation at Point (Infimum) equals Oscillation at Point (Epsilon-Neighborhood)
Definition $b)$ and Definition 2 are equivalent
Therefore:

Definition 1 and Definition 2 are equivalent
$\Box$


Definitions 1 and 3 are equivalent
We reformulate Definition 1 into Definition $(1')$ by:

substituting the definition of $\omega_f \left({U \cap X}\right)$ into the definition of $\omega_f \left({x}\right)$
Definition $(1')$:

$\ds \map {\omega_f} x := \inf_{U \mathop \in \NN_x} \paren {\sup_{y, z \mathop \in U \cap X} \size {\map f y - \map f z} }$

We reformulate Definition 3 into Definition $(3')$ by:

substituting the definition of $\map {\omega_f} {\openint {x - h} {x + h} \cap X}$ into the definition of $\map {\omega_f} x$
Definition 3':

$\ds \map {\omega_f} x := \lim_{h \mathop \to 0^+} \paren {\sup_{y, z \mathop \in \openint {x - h} {x + h} \cap X} \size {\map f y - \map f z} }$

The theorem text of Oscillation at Point (Infimum) equals Oscillation at Point (Limit) also contains two definitions of Oscillation at a Point for a real function $f$.
We call them definitions a and b.
Definition a:
Let $\NN_x$ be the set of open subset neighborhoods of $x$.

$\map {\omega_f} x = \ds \inf \set {\map {\omega_f} {I \cap X}: I \in \NN_x}$
where:

$\map {\omega_f} {I \cap X} = \ds \sup \set {\vert {\map f y - \map f z}: y, z \in I \cap X}$
Definition $b)$:

$\map {\omega_f} x = \ds \lim_{h \mathop \to 0^+} \map {\omega_f} {\openint {x - h} {x + h} \cap X}$

We reformulate Definition $a)$ into Definition $a')$ by:

substituting the definition of $\map {\omega_f} {I \cap X}$ into the definition of $\map {\omega_f} x$
changing set conditions into sup tags
renaming parameter set $I$ to $U$
Definition $a')$:

$\ds \map {\omega_f} x = \inf_{U \mathop \in \NN_x} \paren {\sup_{y, z \mathop \in U \cap X} \size {\map f y - \map f z} }$

We reformulate Definition $b)$ into Definition $b')$ by:

substituting the definition of $\map {\omega_f} {\openint {x - h} {x + h} \cap X}$ (by using the definition of $\map {\omega_f} {I \cap X}$) into the definition of $\map {\omega_f} x$
changing set condition into sup tag
Definition $b')$:

$\ds \map {\omega_f} x = \lim_{h \mathop \to 0^+} \paren {\sup_{y, z \mathop \in \openint {x - h} {x + h} \cap X} \size {\map f y - \map f z} }$

We observe that definitions $(1')$ and $a')$ are the same, so they are equivalent.
Therefore:

Definition 1 and Definition $a)$ are equivalent
Also, Definition $(3')$ and Definition $b')$ are the same, so they are equivalent.
Therefore:

Definition 3 and Definition $b)$ are equivalent

We have:

Definition 1 and Definition $a)$ are equivalent
Definition $a)$ and Definition $b)$ are equivalent by Oscillation at Point (Infimum) equals Oscillation at Point (Limit)
Definition $b)$ and Definition 3 are equivalent
Therefore:

Definition 1 and Definition 3 are equivalent
$\Box$

Thus all definitions listed in the theorem text are equivalent.
$\blacksquare$





