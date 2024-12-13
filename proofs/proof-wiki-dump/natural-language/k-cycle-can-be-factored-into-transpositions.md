# 

Source: https://proofwiki.org/wiki/K-Cycle_can_be_Factored_into_Transpositions

Theorem
Every $k$-cycle can be factorised into the product of $k - 1$ transpositions.
This factorisation is not unique.


Proof
The cycle $\begin{pmatrix} 1 & 2 & \ldots & k \end{pmatrix}$ has the factorisation:

$\begin{pmatrix} 1 & 2 & \ldots & k \end{pmatrix} = \begin{pmatrix} 1 & k \end{pmatrix} \ldots \begin{pmatrix} 1 & 3 \end{pmatrix} \begin{pmatrix} 1 & 2 \end{pmatrix}$

Therefore, the general $k$-cycle $\begin{pmatrix} i_1 & i_2 & \ldots & i_k \end{pmatrix}$ has the factorisation:

$\begin{pmatrix} i_1 & i_2 & \ldots & i_k \end{pmatrix} = \begin{pmatrix} i_1 & i_k \end{pmatrix} \ldots \begin{pmatrix} i_1 & i_3 \end{pmatrix} \begin{pmatrix} i_1 & i_2 \end{pmatrix}$

The cycle $\begin{pmatrix} 1 & 2 & \ldots & k \end{pmatrix}$ also has the factorisation:

$\begin{pmatrix} 1 & 2 & \ldots & k \end{pmatrix} = \begin{pmatrix} 1 & 2 \end{pmatrix} \begin{pmatrix} 2 & 3 \end{pmatrix} \ldots \begin{pmatrix} k - 1 & k \end{pmatrix}$

Therefore, the general $k$-cycle $\begin{pmatrix} i_1 & i_2 & \ldots & i_k \end{pmatrix}$ also has the factorisation:

$\begin{pmatrix} i_1 & i_2 & \ldots & i_k \end{pmatrix} = \begin{pmatrix} i_1 & i_2 \end{pmatrix} \begin{pmatrix} i_2 & i_3 \end{pmatrix} \ldots \begin{pmatrix} i_{k - 1} & i_k \end{pmatrix}$
$\blacksquare$


Sources
1968: Ian D. Macdonald: The Theory of Groups ... (previous) ... (next): Appendix: Elementary set and number theory
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $9$: Permutations $9.10$




