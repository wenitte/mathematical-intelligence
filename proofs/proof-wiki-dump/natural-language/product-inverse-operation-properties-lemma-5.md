# 

Source: https://proofwiki.org/wiki/Product_Inverse_Operation_Properties/Lemma_5

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

$\forall x, y \in G: \paren {x \circ y} \oplus y = x$


Proof









\(\ds \forall x, y \in G: \, \)



\(\ds \paren {x \circ y} \oplus y\)

\(=\)







\(\ds \paren {x \oplus \paren {e \oplus y} } \oplus y\)





Definition of $\circ$














\(\ds \)

\(=\)







\(\ds \paren {x \oplus \paren {e \oplus y} } \oplus \paren {y \oplus e}\)





$\text {PI} 2$: Right Identity














\(\ds \)

\(=\)







\(\ds \paren {x \oplus \paren {e \oplus y} } \oplus \paren {e \oplus \paren {e \oplus y} }\)





$\text {PI} 3$: Product Inverse with Right Identity














\(\ds \)

\(=\)







\(\ds x \oplus e\)





$\text {PI} 4$: Cancellation Property














\(\ds \)

\(=\)







\(\ds x\)









$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 7$: Semigroups and Groups: Exercise $7.7 \ \text {(b)}$




