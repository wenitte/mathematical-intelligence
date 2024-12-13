# 

Source: https://proofwiki.org/wiki/Minimally_Inductive_Class_under_Progressing_Mapping_induces_Nest/Proof_1

Theorem
Let $M$ be a class which is minimally inductive under a progressing mapping $g$.
Then $M$ is a nest in which:

$\forall x, y \in M: \map g x \subseteq y \lor y \subseteq x$


Proof
Let $\RR$ be the relation on $M$ defined as:

$\forall x, y \in M: \map \RR {x, y} \iff \map g x \subseteq y \lor y \subseteq x$

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

  


From the Double Induction Principle, if $\RR$ is a relation on $M$ which satisfies:




\((\text D_1)\)  

$:$  





  \(\ds \forall x \in M:\)

\(\ds \map \RR {x, \O} \)   







  


\((\text D_2)\)  

$:$  





  \(\ds \forall x, y \in M:\)

\(\ds \map \RR {x, y} \land \map \RR {y, x} \implies \map \RR {x, \map g y} \)   







  

then $\map \RR {x, y}$ holds for all $x, y \in M$.

Thus:

$\forall x, y \in M: \map g x \subseteq y \lor y \subseteq x$
follows directly.
$\Box$

Then the fact that:

$\map g x \subseteq y \lor y \subseteq x$
implies that:

$x \subseteq y \lor y \subseteq x$
because:

$x \subseteq \map g x$
Hence the result by definition of a nest.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $3$: The Natural Numbers: $\S 4$ A double induction principle and its applications: Theorem $4.7$




