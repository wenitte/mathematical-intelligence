# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Non-Archimedean_Division_Ring_Norm



Theorem
Let $\struct {R, +, \circ}$ be a division ring whose zero is denoted $0_R$.

The following definitions of the concept of Non-Archimedean Division Ring Norm are equivalent:

Definition 1
A norm $\norm {\, \cdot \,}$ on $R$ is non-Archimedean if and only if $\norm {\, \cdot \,}$ satisfies the axiom:




\((\text N 4)\)  

$:$  



Ultrametric Inequality:   

  \(\ds \forall x, y \in R:\)



   \(\ds \norm {x + y} \)

  \(\ds \le \)  

\(\ds  \max \set {\norm x, \norm y} \)   

  

Definition 2
A non-Archimedean norm on $R$ is a mapping from $R$ to the non-negative reals:

$\norm {\, \cdot \,}: R \to \R_{\ge 0}$
satisfying the non-Archimedean norm axioms:




\((\text N 1)\)  

$:$  



Positive Definiteness:   

  \(\ds \forall x \in R:\)



   \(\ds \norm x = 0 \)

  \(\ds \iff \)  

\(\ds  x = 0_R \)   

  


\((\text N 2)\)  

$:$  



Multiplicativity:   

  \(\ds \forall x, y \in R:\)



   \(\ds \norm {x \circ y} \)

  \(\ds = \)  

\(\ds  \norm x \times \norm y \)   

  


\((\text N 4)\)  

$:$  



Ultrametric Inequality:   

  \(\ds \forall x, y \in R:\)



   \(\ds \norm {x + y} \)

  \(\ds \le \)  

\(\ds  \max \set {\norm x, \norm y} \)   

  



Proof
Definition 1 implies Definition 2
Let $\norm {\,\cdot\,} : R \to \R_{\ge 0}$ be a norm on a division ring satisfying:




\((\text N 4)\)  

$:$  



Ultrametric Inequality:   

  \(\ds \forall x, y \in R:\)



   \(\ds \norm {x + y} \)

  \(\ds \le \)  

\(\ds  \max \set {\norm x, \norm y} \)   

  

It remains only to show that $\norm {\,\cdot\,}$ satisfies $(\text N 1)$ and $(\text N 2)$.
This follows from the definition of a norm on a division ring.
$\Box$


Definition 2 implies Definition 1
Let $\norm{\,\cdot\,} : R \to \R_{\ge 0}$ satisfy the non-Archimedean norm axioms: $(\text N 1)$, $(\text N 2)$ and $(\text N 4)$.
To show that $\norm{\,\cdot\,}$ is a norm on a division ring satisfying $(\text N 4)$, it remains to show that $\norm{\,\cdot\,}$ satisfies:




\((\text N 3)\)  

$:$  



Triangle Inequality:   

  \(\ds \forall x, y \in R:\)



   \(\ds \norm {x + y} \)

  \(\ds \le \)  

\(\ds  \norm x + \norm y \)   

  


Let $x, y \in R$.
Without loss of generality, suppose $\norm x \le \norm y$.
From Non-Archimedean Norm Axiom $\text N 1$: Positive Definiteness:

$0 \le \norm x$

Then:














\(\ds \norm{x + y}\)

\(\le\)







\(\ds \max \set {\norm x, \norm y}\)





Non-Archimedean Norm Axiom $\text N 4$: Ultrametric Inequality














\(\ds \)

\(=\)







\(\ds \norm y\)





as $\norm x \le \norm y$ by assumption














\(\ds \)

\(\le\)







\(\ds \norm x + \norm y\)





as $0 \le \norm x$



The result follows.
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction ... (previous) ... (next): $\S 2.1$: Absolute Values on a Field: Definition $2.1.1 \, (iv)$
2007: Svetlana Katok: p-adic Analysis Compared with Real ... (previous) ... (next): $\S 1.2$ Normed fields: Remark $1.13$




