# 

Source: https://proofwiki.org/wiki/Ideal_of_Ring/Examples/Order_2_Matrices_with_some_Zero_Entries/Proof_1

Example of Ideal of Ring
Let $R$ be the set of all order $2$ square matrices of the form $\begin{pmatrix} x & y \\ 0 & z \end{pmatrix}$ with $x, y, z \in \R$.
Let $S$ be the set of all order $2$ square matrices of the form $\begin{pmatrix} x & y \\ 0 & 0 \end{pmatrix}$ with $x, y \in \R$.
Then $R$ is a ring and $S$ is an ideal of $R$.


Proof
Let $\begin{pmatrix} x_1 & y_1 \\ 0 & z_1 \end{pmatrix}, \begin{pmatrix} x_2 & y_2 \\ 0 & z_2 \end{pmatrix} \in R$.
Then:














\(\ds \begin{pmatrix} x_1 & y_1 \\ 0 & z_1 \end{pmatrix} + \begin{pmatrix} -x_2 & -y_2 \\ 0 & -z_2 \end{pmatrix}\)

\(=\)







\(\ds \begin{pmatrix} x_1 - x_2 & y_1 - y_2 \\ 0 & z_1 - z_2 \end{pmatrix}\)




















\(\ds \)

\(\in\)







\(\ds R\)




















\(\ds \begin{pmatrix} x_1 & y_1 \\ 0 & z_1 \end{pmatrix} \begin{pmatrix} x_2 & y_2 \\ 0 & z_2 \end{pmatrix}\)

\(=\)







\(\ds \begin{pmatrix} x_1 \times x_2 + y_1 \times 0 & x_1 \times y_2 + y_1 \times z_2 \\ 0 \times x_2 + z_1 \times 0 & 0 \times y_2 + z_1 \times z_2 \end{pmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin{pmatrix} x_1 x_2  & x_1 y_2 + y_1 z_2 \\ 0 & z_1 z_2 \end{pmatrix}\)




















\(\ds \)

\(\in\)







\(\ds R\)









Thus by the Subring Test $R$ is a subring of the ring of order $2$ matrices over $\R$.

We have that, for example, $\begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix} \in S$
Hence $S \ne \O$.

Let $\begin{pmatrix} x_1 & y_1 \\ 0 & z_1 \end{pmatrix}, \begin{pmatrix} x_2 & y_2 \\ 0 & z_2 \end{pmatrix} \in S$.














\(\ds \begin{pmatrix} x_1 & y_1 \\ 0 & 0 \end{pmatrix} + \begin{pmatrix} -x_2 & -y_2 \\ 0 & 0 \end{pmatrix}\)

\(=\)







\(\ds \begin{pmatrix} x_1 - x_2 & y_1 - y_2 \\ 0 & 0 \end{pmatrix}\)




















\(\ds \)

\(\in\)







\(\ds S\)









and so $S$ is closed under matrix subtraction.

Now let $\begin{pmatrix} a & b \\ 0 & 0 \end{pmatrix} \in S$ for real $a, b$.
Let $\begin{pmatrix} x & y \\ 0 & z \end{pmatrix} \in R$.
Then we have:














\(\ds \begin{pmatrix} x & y \\ 0 & z \end{pmatrix} \begin{pmatrix} a & b \\ 0 & 0 \end{pmatrix}\)

\(=\)







\(\ds \begin{pmatrix} x \times a + y \times 0 & x \times b + y \times 0 \\ 0 \times a + z \times 0 & 0 \times b + z \times 0 \end{pmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin{pmatrix} x a & x b \\ 0 & 0 \end{pmatrix}\)




















\(\ds \)

\(\in\)







\(\ds S\)









and:














\(\ds \begin{pmatrix} a & b \\ 0 & 0 \end{pmatrix} \begin{pmatrix} x & y \\ 0 & z \end{pmatrix}\)

\(=\)







\(\ds \begin{pmatrix} a \times x + b \times 0 & a \times y + b \times z \\ 0 \times x + 0 \times 0 & 0 \times y + 0 \times z \end{pmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin{pmatrix} a x & a y + b z \\ 0 & 0 \end{pmatrix}\)




















\(\ds \)

\(\in\)







\(\ds S\)









Thus, by the Test for Ideal, $S$ is an ideal of $R$.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 58.4$ Ideals: Worked example




