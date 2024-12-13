# 

Source: https://proofwiki.org/wiki/Hilbert_Proof_System_Instance_2_Independence_Results/Independence_of_A2



Theorem
Let $\mathscr H_2$ be Instance 2 of the Hilbert proof systems.
Then:

Axiom $(A2)$ is independent from $(A1)$, $(A3)$, $(A4)$.


Proof
Denote with $\mathscr H_2 - (A2)$ the proof system resulting from $\mathscr H_2$ by removing axiom $(A2)$.
Consider $\mathscr C_3$, Instance 3 of constructed semantics.
We will prove that:

$\mathscr H_2 - (A2)$ is sound for $\mathscr C_3$;
Axiom $(A2)$ is not a tautology in $\mathscr C_3$
which leads to the conclusion that $(A2)$ is not a theorem of $\mathscr H_2 - (A2)$.


Soundness of $\mathscr H_2 - (A2)$ for $\mathscr C_3$
Starting with the axioms:




\((A1)\)  

$:$  



Rule of Idempotence   



\(\ds (p \lor p) \implies p \)   







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


Next it needs to be shown that the rules of inference of $\mathscr H_2$ preserve $\mathscr C_3$-tautologies.


Rule $RST \, 1$: Rule of Uniform Substitution
By definition, any WFF is assigned a value $0$, $1$ or $2$.
Thus, in applying Rule $RST \, 1$, we are introducing $0$, $1$ or $2$ in the position of a propositional variable.
But all possibilities of assignments of $0$s, $1$s and $2$s to such propositional variables were shown not to affect the resulting values of the axioms.
Hence Rule $RST \, 1$ preserves $\mathscr C_3$-tautologies.


Rule $RST \, 2$: Rule of Substitution by Definition
Because the definition of $\mathscr C_3$ was given in terms of Rule $RST \, 2$, it cannot affect any of its results.


Rule $RST \, 3$: Rule of Detachment
Suppose $\mathbf A$ and $\mathbf A \implies \mathbf B$ both take value $0$ or $1$.
Then using Rule $RST \, 2$, definition $(2)$, we get:

$\neg \mathbf A \lor \mathbf B$
taking value $0$ or $1$ by assumption.
But $\neg \mathbf A$ takes value $1$ or $2$, by definition of $\neg$.
So from the definition of $\lor$, we have the following options:
$\begin{array}{|c|c|c|}
\hline
\mathbf A & \neg \mathbf A \lor \mathbf B & \\
\hline
0 & 0 & 2 \lor \mathbf B = 0 \implies \mathbf B = 0\\
1 & 0 & 1 \lor \mathbf B = 0 \implies \mathbf B = 0\\
0 & 1 & 2 \lor \mathbf B = 1 \implies \mathbf B = 1\\
1 & 1 & 1 \lor \mathbf B = 1 \implies \mathbf B = 1\\
\hline
\end{array}$
In each case, we see that the definition of $\lor$ necessitates that $\mathbf B$ takes value $0$ or $1$, respectively.
Hence Rule $RST \, 3$ also produces only WFFs of value $0$ or $1$.


Rule $RST \, 4$: Rule of Adjunction
Suppose $\mathbf A$ and $\mathbf B$ take value $0$ or $1$.
Then using the definitional abbreviations:

$\mathbf A \land \mathbf B =_{\text{def}} \neg ( \neg \mathbf A \lor \neg \mathbf B )$
We compute:

$\begin{array}{|c|ccccc|}
\hline
\neg & ( \neg & \mathbf A & \lor & \neg & \mathbf B ) \\
\hline
0 & 2 & 0 & 2 & 2 & 0 \\
0 & 2 & 0 & 2 & 1 & 1 \\
0 & 1 & 1 & 2 & 2 & 0 \\
1 & 1 & 1 & 1 & 1 & 1 \\
\hline
\end{array}$
proving that Rule $RST \, 4$ also produces only $0$s and $1$s from $0$s and $1$s.

Hence $\mathscr H_2 - (A2)$ is sound for $\mathscr C_3$.


$(A2)$ is not a $\mathscr C_3$-tautology
Recall axiom $(A2)$, the Rule of Addition:

$q \implies (p \lor q)$
Under $\mathscr C_3$, we apply a single definitional abbreviation and have the following:

$\begin{array}{|cc|c|ccc|}
\hline
\neg & q & \lor & (p & \lor & q) \\
\hline
2 & 0 & 0 & 0 & 0 & 0 \\
1 & 1 & 0 & 0 & 0 & 1 \\
0 & 2 & 0 & 0 & 0 & 2 \\
2 & 0 & 0 & 1 & 0 & 0 \\
1 & 1 & 1 & 1 & 1 & 1 \\
0 & 2 & 0 & 1 & 2 & 2 \\
2 & 0 & 0 & 2 & 0 & 0 \\
1 & 1 & 2 & 2 & 2 & 1 \\
0 & 2 & 0 & 2 & 2 & 2 \\
\hline
\end{array}$
Hence according to the definition of $\mathscr C_3$, $(A1)$ is not a tautology.

Therefore $(A2)$ is independent from $(A1)$, $(A3)$, $(A4)$.
$\blacksquare$


Sources
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 4.6$: Independence




