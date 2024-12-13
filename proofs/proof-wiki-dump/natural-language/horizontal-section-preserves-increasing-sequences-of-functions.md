# 

Source: https://proofwiki.org/wiki/Horizontal_Section_preserves_Increasing_Sequences_of_Functions

Theorem
Let $X$ and $Y$ be sets.
Let $\sequence {f_n}_{n \mathop \in \N}$ be an increasing sequence of real-valued functions with $f_i : X \times Y \to \overline \R$ for each $i$. 
Let $y \in Y$. 

Then the sequence $\sequence {\paren {f_n}^y}_{n \mathop \in \N}$ is increasing, where $\paren {f_n}^y$ denotes the $y$-horizontal section of $f_n$. 


Proof
Since $\sequence {f_n}_{n \mathop \in \N}$ is an increasing sequence of real-valued functions, we have: 

$\map {f_i} {x, y} \le \map {f_j} {x, y}$ for all $i, j$ with $i \le j$.
for all $\tuple {x, y} \in X \times Y$.
In particular, for fixed $y \in Y$, we have: 

$\map {f_i} {x, y} \le \map {f_j} {x, y}$ for all $i, j$ with $i \le j$ and all $x \in X$.
From the definition of the $y$-horizontal section, we have: 

$\map {\paren {f_i}^y} x \le \map {\paren {f_j}^y} x$ for all $i, j$ with $i \le j$ and all $x \in X$.
So: 

$\sequence {\paren {f_n}^y}_{n \mathop \in \N}$ is an increasing sequence of real-valued functions.
$\blacksquare$





