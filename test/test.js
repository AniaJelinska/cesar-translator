import { expect } from "chai";


function cipher(text, shift){
  if (text === ""){
    return "";
  }
  const x = text.charCodeAt(0) + shift;
  return String.fromCharCode(x);
}
describe("cesar-translator", () => {
  it("should not be undefined", () => {
    expect(cipher("", 0)).to.not.be.undefined;
  });

  it("should return A when given A and shift 0", () => {
    const result = cipher("A", 0);
    expect(result).to.equal("A");
  });

  it("should return empty string when given empty string", () => {
    const result = cipher("", 0);
    expect(result).to.equal("");
  });
  it("should return B when given A and shift 1", () => {
    const result = cipher("A", 1);
    expect(result).to.equal("B");
  });

});
