# 

Source: https://proofwiki.org/wiki/Minimally_Closed_Class_under_Progressing_Mapping_induces_Nest/Proof

Theorem
Let $N$ be a class which is closed under a progressing mapping $g$.
Let $b$ be an element of $N$ such that $N$ is minimally closed under $g$ with respect to $b$.

For all $x, y \in N$:

either $\map g x \subseteq y$ or $y \subseteq x$
and $N$ forms a nest:

$\forall x, y \in N: x \subseteq y$ or $y \subseteq x$


Proof
Let $\RR$ be the relation on $N$ defined as:

$\forall x, y \in N: \map \RR {x, y} \iff \map g x \subseteq y \lor y \subseteq x$

We are given that $g$ is a progressing mapping.
From the Progressing Function Lemma, we have that:




\((1)\)  

$:$  





  \(\ds \forall y \in \Dom g:\)



   \(\ds \map \RR {y, \O} \)





  


\((2)\)  

$:$  





  \(\ds \forall x, y \in \Dom g:\)



   \(\ds \map \RR {x, y} \land \map \RR {y, x} \)

  \(\ds \implies \)  

\(\ds  \map \RR {x, \map g y} \)   

  

In what follows, $(1)$ is not needed.

From the Double Induction Principle for Minimally Closed Class, if $\RR$ is a relation on $N$ which satisfies:




\((\text D_1)\)  

$:$  





  \(\ds \forall x \in N:\)

\(\ds \map \RR {x, b} \)   







  


\((\text D_2)\)  

$:$  





  \(\ds \forall x, y \in N:\)

\(\ds \map \RR {x, y} \land \map \RR {y, x} \implies \map \RR {x, \map g y} \)   







  

then $\map \RR {x, y}$ holds for all $x, y \in N$.

As $\Dom g = N$ it is seen that $(\text D 2)$ is fulfilled by $(2)$ directly.
It remains to be demonstrated that $(\text D 1)$ holds.

Indeed, from Smallest Element of Minimally Closed Class under Progressing Mapping, we have that:

$\forall x \in N: b \subseteq x$
By the Rule of Addition:

$\forall x \in N: \map g x \subseteq b \lor b \subseteq x$
That is:

$\forall x \in N: \map \RR {x, b}$

Thus by the Double Induction Principle for Minimally Closed Class:

$\forall x, y \in N: \map \RR {x, y}$
That is:

$\forall x, y \in N: \map g x \subseteq y \lor y \subseteq x$
$\Box$

As $g$ is a progressing mapping, we have:

$x \subseteq \map g x$
Hence from:

$\map g x \subseteq y \lor y \subseteq x$
we have:

$x \subseteq y \lor y \subseteq x$
Hence the result by definition of a nest.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $3$: The Natural Numbers: $\S 4$ A double induction principle and its applications: Exercise $4.1$




