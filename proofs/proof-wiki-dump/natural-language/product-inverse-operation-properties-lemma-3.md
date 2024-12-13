# 

Source: https://proofwiki.org/wiki/Product_Inverse_Operation_Properties/Lemma_3

Theorem
Let $\struct {G, \oplus}$ be a closed algebraic structure on which the following properties hold:




\((\text {PI} 1)\)  

$:$  



Self-Inverse Property   

  \(\ds \forall x \in G:\)

\(\ds x \oplus x = e \)   







  


\((\text {PI} 2)\)  

$:$  



Right Identity   

  \(\ds \exists e \in G: \forall x \in G:\)

\(\ds x \oplus e = x \)   







  


\((\text {PI} 3)\)  

$:$  



Product Inverse with Right Identity   

  \(\ds \forall x, y \in G:\)

\(\ds e \oplus \paren {x \oplus y} = y \oplus x \)   







  


\((\text {PI} 4)\)  

$:$  



Cancellation Property   

  \(\ds \forall x, y, z \in G:\)

\(\ds \paren {x \oplus z} \oplus \paren {y \oplus z} = x \oplus y \)   







  

These four stipulations are known as the product inverse operation axioms.

Let $\circ$ be the operation on $G$ defined as:

$\forall x, y \in G: x \circ y = x \oplus \paren {e \oplus y}$

Then:

$\forall x, y \in G: \quad x \oplus y = e \implies x = y$


Proof
Let $x \oplus y = e$.
Then we have:










\(\ds \forall x, y \in G: \, \)



\(\ds \paren {x \oplus y} \oplus \paren {e \oplus y}\)

\(=\)







\(\ds e \oplus \paren {e \oplus y}\)





from $x \oplus y = e$














\(\ds \)

\(=\)







\(\ds y \oplus e\)





$\text {PI} 3$: Product Inverse with Right Identity














\(\ds \)

\(=\)







\(\ds y\)





$\text {PI} 2$: Right Identity



Then:










\(\ds \forall x, y \in G: \, \)



\(\ds \paren {x \oplus y} \oplus \paren {e \oplus y}\)

\(=\)







\(\ds x \oplus e\)





$\text {PI} 4$: Cancellation Property














\(\ds \)

\(=\)







\(\ds x\)





$\text {PI} 2$: Right Identity



That is:

$x = y$
Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 7$: Semigroups and Groups: Exercise $7.7 \ \text {(b)}$




