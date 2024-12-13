# 

Source: https://proofwiki.org/wiki/Hilbert_Proof_System_Instance_2_Independence_Results/RST4_is_Derivable

Theorem
Let $\mathscr H_2$ be Instance 2 of the Hilbert proof systems.
Then:

Rule of inference $RST \, 4$ is derivable from $RST \, 1, RST \, 2, RST \, 3$ and the axioms $(A1)$ through $(A4)$.


Proof
Recall the statement of $RST \, 4$:

If $\mathbf A$ and $\mathbf B$ are theorems of $\mathscr H_2$, then so is $\mathbf A \land \mathbf B$.

Suppose that $\mathbf A$ and $\mathbf B$ are theorems of $\mathscr H_2$.
From Rule of Conjunction/Sequent Form/Formulation 2, we have as a theorem:

$p \implies \paren{ q \implies \paren{ p \land q } }$
which can be recursively checked to not have used $RST \, 4$ anywhere in a proof.
Applying $RST \, 1$, this becomes:

$\mathbf A \implies \paren{ \mathbf B \implies \paren{ \mathbf A \land \mathbf B } }$
Using $RST \, 3$ twice, the result follows.
$\blacksquare$


Sources
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous): $\S 4.7$: The Derivation of Formulae: $DR \, 2$




