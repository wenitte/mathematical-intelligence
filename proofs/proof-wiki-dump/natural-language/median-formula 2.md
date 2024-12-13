# 

Source: https://proofwiki.org/wiki/Median_Formula



Theorem
Let $\triangle ABC$ be a triangle.
Let $CD$ be the median of $\triangle ABC$ which bisects $AB$.


The length $m_c$ of $CD$ is given by:

${m_c}^2 = \dfrac {a^2 + b^2} 2 - \dfrac {c^2} 4$


Proof 1













\(\ds a^2 \cdot AD + b^2 \cdot DB\)

\(=\)







\(\ds CD^2 \cdot c + AD \cdot DB \cdot c\)





Stewart's Theorem








\(\ds \leadsto \ \ \)





\(\ds a^2 \frac c 2 + b^2 \frac c 2\)

\(=\)







\(\ds {m_c}^2 \cdot c + \paren {\frac c 2}^2 c\)





substituting $AD = DB = \dfrac c 2$ and $CD = m_c$








\(\ds \leadsto \ \ \)





\(\ds \frac c 2 \paren {a^2 + b^2}\)

\(=\)







\(\ds m_c^2 \cdot c + \frac {c^2} 4 \cdot c\)














\(\ds \leadsto \ \ \)





\(\ds \frac {a^2 + b^2} 2\)

\(=\)







\(\ds m_c^2 + \frac {c^2} 4\)














\(\ds \leadsto \ \ \)





\(\ds {m_c}^2\)

\(=\)







\(\ds \frac {a^2 + b^2} 2 - \frac {c^2} 4\)





after algebra



$\blacksquare$


Proof 2
Let $\triangle ABC$ be embedded in the complex plane.




Let $\mathbf a = \overrightarrow {AC}$ and $\mathbf b = \overrightarrow {BC}$.
Then:














\(\ds \overrightarrow {AB}\)

\(=\)







\(\ds \mathbf a - \mathbf b\)




















\(\ds \overrightarrow {AD}\)

\(=\)







\(\ds \dfrac {\overrightarrow {AB} } 2\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\mathbf a - \mathbf b} 2\)










Then:














\(\ds \overrightarrow {AC} + \overrightarrow {CD}\)

\(=\)







\(\ds \overrightarrow {AD}\)














\(\ds \leadsto \ \ \)





\(\ds \overrightarrow {CD}\)

\(=\)







\(\ds \overrightarrow {AD} - \overrightarrow {AC}\)




















\(\ds \)

\(=\)







\(\ds \frac {\mathbf a - \mathbf b} 2 - \mathbf a\)




















\(\ds \)

\(=\)







\(\ds -\frac {\mathbf a + \mathbf b} 2\)














\(\ds \leadsto \ \ \)





\(\ds {m_c}^2\)

\(=\)







\(\ds \size {\overrightarrow {CD} }^2\)




















\(\ds \)

\(=\)







\(\ds \size {-\frac {\mathbf a + \mathbf b} 2}^2\)




















\(\ds \)

\(=\)







\(\ds \frac 1 4 \paren {\paren {\mathbf a + \mathbf b} \cdot \paren {\mathbf a + \mathbf b} }\)





Dot Product of Vector with Itself














\(\ds \)

\(=\)







\(\ds \frac 1 4 \paren {\mathbf a \cdot \mathbf a + \mathbf b \cdot \mathbf b + 2 \mathbf a \cdot \mathbf b}\)





Square of Sum of Vectors














\(\ds \)

\(=\)







\(\ds \frac 1 4 \paren {\mathbf a \cdot \mathbf a + \mathbf b \cdot \mathbf b - \paren {\mathbf a - \mathbf b} \cdot \paren {\mathbf a - \mathbf b} + \mathbf a \cdot \mathbf a + \mathbf b \cdot \mathbf b}\)





Square of Sum of Vectors














\(\ds \)

\(=\)







\(\ds \frac 1 4 \paren {2 \size {\mathbf a}^2 + 2 \size {\mathbf b}^2 - \size {\mathbf a - \mathbf b}^2}\)





Dot Product of Vector with Itself














\(\ds \)

\(=\)







\(\ds \frac 1 4 \paren {2 a^2 + 2 b^2 - c^2}\)




















\(\ds \)

\(=\)







\(\ds \frac {a^2 + b^2} 2 - \frac {c^2} 4\)









$\blacksquare$


Proof 3













\(\ds {m_c}^2\)

\(=\)







\(\ds b^2 + \paren {\frac c 2}^2 - 2 b \paren {\frac c 2} \cos A\)





Law of Cosines














\(\ds \)

\(=\)







\(\ds b^2 + \frac {c^2} 4 - 2 b \paren {\frac c 2} \paren {\frac {b^2 + c^2 - a^2} {2 b c} }\)





Law of Cosines














\(\ds \)

\(=\)







\(\ds b^2 + \frac {c^2} 4 - \frac {b^2 + c^2 - a^2} 2\)




















\(\ds \)

\(=\)







\(\ds \frac {a^2} 2 + \frac {b^2} 2 - \frac {c^2} 4\)









$\blacksquare$


Examples
Triangle $\tuple {1, -2}, \tuple {-3, 4}, \tuple {2, 2}$
Consider the triangle $\triangle ABC$ whose vertices are:

$A = \tuple {1, -2}, B = \tuple {-3, 4}, C = \tuple {2, 2}$
The length of the median of $\triangle ABC$ which which bisects $AB$ is $\sqrt {10}$.


Sources
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): median formula




