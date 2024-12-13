# 

Source: https://proofwiki.org/wiki/Lattice_and_Ring_of_Real-Valued_Functions_forms_Ordered_Ring



Theorem
Let $\struct {S, \tau_{_S} }$ be a topological space.
Let $\R$ denote the real number line.

Let $\struct {\R^S, +, \times}$ be the ring of real-valued functions from $S$ to $\R$.
Let $\struct {\R^S, \vee, \wedge, \le}$ be the lattice of real-valued functions from $S$ to $\R$.

Then:

$\struct {\R^S, +, \times, \le}$ is an ordered ring


Proof
From Structure Induced by Group Operation is Group:

the zero of $\struct {\R^S, +, \times}$ is the constant mapping $0_{R^S} : S \to R$ defined by:
$\forall s \in S : \map {0_{R^S}} s = 0_R$

It needs to be shown that the order $\le$ on the lattice of real-valued functions satisies the ring compatible ordering axioms:




\((\text {OR} 1)\)  

$:$  



$\le$ is compatible with $+$:   

  \(\ds \forall f, g, h \in \R^S:\)



   \(\ds f \le g \)

  \(\ds \implies \)  

\(\ds  \paren {f + h} \le \paren {g + h} \)   

  


\((\text {OR} 2)\)  

$:$  



Product of Positive Elements is Positive   

  \(\ds \forall f, g \in \R^S:\)



   \(\ds 0_{\R^S} \le f, 0_{\R^S} \le g \)

  \(\ds \implies \)  

\(\ds  0_{\R^S} \le f g \)   

  



$\paren {\text {OR} 1}$
Let $f, g, h \in \R^S$.
Let $f \le g$.
Hence:

$\forall s \in S: \map f s \le \map g s$

We have:










\(\ds \forall s \in S: \, \)



\(\ds \map {\paren{f + h} } s\)

\(=\)







\(\ds \map f s + \map h s\)





Definition of Pointwise Addition














\(\ds \)

\(\le\)







\(\ds \map g s + \map h s\)





Real Numbers form Totally Ordered Field














\(\ds \)

\(=\)







\(\ds \map {\paren{g + h} } s\)





Definition of Pointwise Addition




By definition of lattice of real-valued functions:

$\paren {f + h} \le \paren {g + h}$

Since $f, g$ and $h$ were arbitrary:

$\forall f, g, h \in \R^S : f \le g \implies \paren {f + h} \le \paren {g + h}$
$\Box$


$\paren {\text {OR} 2}$
Let $f, g \in \R^S$.
Let $0_{\R^S} \le f, 0_{\R^S} \le g$.
Hence:

$\forall s \in S: 0 \le \map f s, 0 \le \map g s$

We have:










\(\ds \forall s \in S: \, \)



\(\ds 0\)

\(\le\)







\(\ds \map f s \map g s\)





Real Numbers form Totally Ordered Field














\(\ds \)

\(=\)







\(\ds \map {\paren{f g} } s\)





Definition of Pointwise Multiplication




By definition of lattice of real-valued functions:

$0_{\R^S} \le f g$

Since $f$ and $g$ were arbitrary:

$\forall f, g \in \R^S : 0_{\R^S} \le f, 0_{\R^S} \le g \implies 0_{\R^S} \le f g$
$\Box$

Thus the ring compatible ordering axioms are seen to hold for the order $\le$ on the lattice of real-valued functions.
$\blacksquare$


Sources
1960: Leonard Gillman and Meyer Jerison: Rings of Continuous Functions: Chapter $1$: Functions on a Topological Space, $\S 1.2$




