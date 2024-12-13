# 

Source: https://proofwiki.org/wiki/Hilbert_Proof_System_Instance_2_is_Consistent



Theorem
Instance 2 of the Hilbert proof systems $\mathscr H_2$ is consistent.


Proof
Consider Instance 1 of a constructed semantics, denoted $\mathscr C_1$.
Note that $\neg p$ is not a tautology for $\mathscr C_1$.
We will establish that every $\mathscr H_2$-theorem is a $\mathscr C_1$-tautology.
That is, that $\mathscr H_2$ is sound for $\mathscr C_1$.

Starting with the axioms:




\((A1)\)  

$:$  



Rule of Idempotence   



\(\ds (p \lor p) \implies p \)   







  Proof of Tautology


\((A2)\)  

$:$  



Rule of Addition   



\(\ds q \implies (p \lor q) \)   







  Proof of Tautology


\((A3)\)  

$:$  



Rule of Commutation   



\(\ds (p \lor q) \implies (q \lor p) \)   







  Proof of Tautology


\((A4)\)  

$:$  



Factor Principle   



\(\ds (q \implies r) \implies \left({ (p \lor q) \implies (p \lor r)}\right) \)   







  Proof of Tautology


Next it needs to be shown that the rules of inference of $\mathscr H_2$ preserve $\mathscr C_1$-tautologies.


Rule $RST \, 1$: Rule of Uniform Substitution
By definition, any WFF is assigned a value $1$ or $2$.
Thus, in applying Rule $RST \, 1$, we are introducing $1$ or $2$ in the position of a propositional variable.
But all possibilities of assignments of $1$s and $2$s to such propositional variables were shown not to affect the resulting value $2$ of the axioms.
Hence Rule $RST \, 1$ preserves $\mathscr C_1$-tautologies.


Rule $RST \, 2$: Rule of Substitution by Definition
Because the definition of $\mathscr C_1$ was given in terms of Rule $RST \, 2$, it cannot affect any of its results.


Rule $RST \, 3$: Rule of Detachment
Suppose $\mathbf A$ and $\mathbf A \implies \mathbf B$ both take value $2$.
Then using Rule $RST \, 2$, definition $(2)$, we get:

$\neg \mathbf A \lor \mathbf B$
taking value $2$ by assumption.
But $\neg \mathbf A$ takes value $1$ by definition of $\neg$.
So from the definition of $\lor$ it must be that $\mathbf B$ takes value $2$.
Hence Rule $RST \, 3$ also produces only WFFs of value $2$.


Rule $RST \, 4$: Rule of Adjunction
Suppose $\mathbf A$ and $\mathbf B$ take value $2$.
Then:














\(\ds \mathbf A \land \mathbf B\)

\(=\)







\(\ds 2 \land 2\)




















\(\ds \)

\(=\)







\(\ds \neg ( \neg 2 \lor \neg 2 )\)





Rule $RST \, 2 \, (1)$














\(\ds \)

\(=\)







\(\ds \neg ( 1 \lor 1 )\)




















\(\ds \)

\(=\)







\(\ds \neg 1\)




















\(\ds \)

\(=\)







\(\ds 2\)









proving that Rule $RST \, 4$ also produces only $2$s from $2$s.

Hence $\mathscr H_2$ is sound for $\mathscr C_1$.
In particular:

$\not\vdash_{\mathscr H_2} \neg p$
Hence $\mathscr H_2$ is consistent.
$\blacksquare$


Sources
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 4.5$: Consistency




